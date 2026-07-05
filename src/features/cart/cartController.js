
import { ApplicationError } from "../../errorFile/applicationError.js";
import  cartModels  from "./cartModels.js";
import cartRepository from './cartRepsitory.js'
export default class cartController{
    constructor(){
this.cartRepository=new cartRepository();
    }

    async addItem(req,res,next){
        try {
            const productId=req.body.productId;
            const quantity=Number(req.body.quantity) || 1
            const userId=req.userId;
                        console.log(req.userId);

            const result=await this.cartRepository.addItem(productId,userId,quantity);
            res.redirect('/api/cart')
        } catch (err) {
            console.log(err)
            next(new ApplicationError("Somthing went wrong",500))
        }
    }
    async getItem(req,res,next){


                try {
            const userId=req.userId;
            const items=await this.cartRepository.getItem(userId)
const total = items.reduce((sum, item) => {
    if (!item.product) return sum;
    return sum + item.product.price * item.quantity;
}, 0);                 res.render('cart',{
                    items,
                    total
                })

        } catch (err) {
            console.log(err)
            next(new ApplicationError("Somthing went wrong",500))
        }

    }
    async deleteItem(req,res,next){
            try {
            const userId=req.userId;
            const cartItemId=req.params.id;
            const result=await this.cartRepository.deleteCartItem(userId,cartItemId);
            if(result.deletedCount===0){
                return res.status(404).send("Item not found")
            }
return res.redirect('/api/cart');
} catch (err) {
            next(new ApplicationError("Somthing went wrong",500))
        }
    }
async increaseQuantity(req,res,next){
    try {
        const cartId=req.params.id;
        await this.cartRepository.increaseQuantity(cartId);
        res.redirect('/api/cart')
    } catch (err) {
        next(err)
    }
}
async decreaseQuantity(req,res,next){
    try {
                const cartId=req.params.id;
await this.cartRepository.decreaseQuantity(cartId);
res.redirect('/api/cart') 
    } catch (err) {
        next(err)
    }
}
}

