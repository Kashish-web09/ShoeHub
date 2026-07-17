import sellerOrderRepo from "./orderRepository.js";
import sellerOrderModel from "./orderModels.js";
import userRepository from "../../users/userRepsitory.js";
import { sendOrderShipped } from "../../../config/emailService.js";

export default class sellerOrderController{
    constructor() {
        this.sellerOrderRepo=new sellerOrderRepo();
        this.userRepository=new userRepository()
    }

async getOrders(req,res,next){
    try {
        const order=await this.sellerOrderRepo.getSellerOrders();
return res.render("seller/orders",{
    title:"All Orders",
    orders:order,
    customerName:"",
    payment:"",
    status:""
})
    } catch (err) {
        next(err)
    }
}

async getOrderDetails(req,res,next){
        try {
        const orderId=req.params.id;
       const order= await this.sellerOrderRepo.getOrderById(orderId)
        return res.render("seller/ordersDetails",{
            title:"Order Details",
            order
            
        })
    } catch (err) {
        next(err)
    }

}

async updateOrderStatus(req,res,next){
        try {
        const orderId=req.params.id;
        const status=req.body.status;
        await this.sellerOrderRepo.updateOrderStatus(orderId,status);
        return res.redirect("/api/seller/orders");
                if(status==="Shipped"){
            const order=await this.sellerOrderRepo.getOrderById(orderId)
            const user=await this.userRepository.getUserById(order.userId);
            await sendOrderShipped(user.email,order._id)
        }

    } catch (err) {
        next(err)
    }

}

async filterOrder(req,res,next){
    try {
        const {customerName="",payment="",status=""}=req.query;
        const orders=await this.sellerOrderRepo.filterOrder(customerName,payment,status);
        res.render("seller/orders",{
            orders,
            customerName,
            payment,
            status
        })
    } catch (err) {
        next(err)
    }
}

}
