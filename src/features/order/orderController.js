import orderRepository from "./orderRepository.js";
import orderModels from "./orderModels.js";
import cartRepository from "../cart/cartRepsitory.js";
import userRepository from "../users/userRepsitory.js";
import { sendOrderConfirmation, sendOrderShipped } from "../../config/emailService.js";
export default class orderController{
    constructor(){
        this.orderRepository=new orderRepository();
        this.cartRepository=new cartRepository();
        this.userRepository=new userRepository();
    }
    async placeOrder(req,res,next){

        try {
            const userId=req.userId;
            const user=await this.userRepository.getUserById(userId);
const {
    fullName,
    phone,
    address,
    city,
    state,
    pincode,
    paymentMethod
} = req.body;

const shippingAddress = {
    fullName,
    phone,
    address,
    city,
    state,
    pincode
};            const cartItem=await this.cartRepository.getItem(userId);
            if(!cartItem || cartItem.length===0){
                return res.status(400).send("Your cart is empty")
            }
            const total=cartItem.reduce((sum,item)=>{
                                return sum+(item.product.price*item.quantity)

            },0);
            const items = cartItem.map(item => ({
    productId: item.product._id,
    productName: item.product.name,
    image: item.product.image,
    price: item.product.price,
    quantity: item.quantity,
    subtotal: item.product.price * item.quantity
}));

const newOrder = new orderModels(
    userId,
    user.name,
    items,
    total,
    shippingAddress,
    paymentMethod,
    paymentMethod === "Cash on Delivery" ? "Pending" : "Paid",
    "Placed"
);

const order=await this.orderRepository.placeOrder(newOrder);
await this.cartRepository.clearCart(userId)
await sendOrderConfirmation(user.email,order.insertedId)
return res.redirect('/api/orders')
} catch (err) {
            next(err)
        }
    }
    async checkoutPage(req,res,next){
        try {
            const userId=req.userId;
            const cartItem=await this.cartRepository.getItem(userId);
            if(!cartItem || cartItem.length===0){
                return res.redirect('/api/cart')
            }
            const total=cartItem.reduce((sum,item)=>{
                return sum+item.product.price*item.quantity
            },0);
            res.render("checkout",{
                cartItem,
                total
            })
        } catch (err) {
            next(err)
        }
    }
async getAllOrders(req, res, next) {
    try {
        const userId = req.userId;

        const orders = await this.orderRepository.getAllOrders();

        res.render("admin/orders", { orders });

    } catch (err) {
        next(err);
    }
}    


async getOrder(req,res,next){
try{
        const userId=req.userId;
    const orderId=req.params.id;
    const order=await this.orderRepository.getOrderById(orderId,userId);
    if(!order){
        return res.status(404).send("Order not found")
    }
            res.render("orderDetails", { orders });

}catch(err){
    next(err)
}
    }
async getOrders(req,res,next){
    try {
        const userId=req.userId;
        const order=await this.orderRepository.getOrderByUserId(userId);
        res.render("orders",{orders:order})
    } catch (err) {
        next(err)
    }
}
    async cancelOrder(req,res,next){
try {
    const userId=req.userId;
    const orderId=req.params.id;
   const result= await this.orderRepository.cancelOrder(orderId,userId);
   if(result.matchCount===0){
    return res.status(404).send("Order not found")
   }
    return res.redirect('/api/orders')
} catch (err) {
    next(err)
}
    }
    async updateOrder(req,res,next){
try{
    const orderId=req.params.id;
const {status}=req.body;
const allowedStatus=[
    "Placed",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled"
]
if(!allowedStatus.includes(status)){
    return res.status(400).send("Invalid order status")
}

const result= await this.orderRepository.updateOrderStatus(orderId,status);
   if(result.matchCount===0){
    return res.status(404).send("Order not found")
   }
   if(status==="Shipped"){
    const order=await this.orderRepository.getOrderById(orderId);
    const user=await this.userRepository.getUserById(order.userId);
    await sendOrderShipped(user.email,order._id)
   }

res.redirect('/admin/orders')
}catch(err){
    next(err)
}
    }
}