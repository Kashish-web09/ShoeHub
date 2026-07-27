import mongoose from "mongoose";
import { orderSchema } from "./orderSchema.js";
import { ApplicationError } from "../../errorFile/applicationError.js";
const orderModels=mongoose.models.orders || mongoose.model('orders',orderSchema);

export default class orderRepository{
        async placeOrder(order){
    try {
const newOrder=new orderModels(order);
await newOrder.save();
return newOrder;
        
    } catch (err) {
        console.log(err)
        throw new ApplicationError("Somthing went wrong with the db",500)
    }
        }
        async getAllOrders(){
    try {
        return await orderModels.find();
    } catch (err) {
        throw new ApplicationError("Somthing went wrong with the db",500)
    }
    
        }
            async getOrderByUserId(userId){
    try {
       return await orderModels.find({userId});
    } catch (err) {
        throw new ApplicationError("Somthing went wrong with the db",500)
    }
    
        }
        async getOrderById(orderId,userId){
    try {
        return await orderModels.findOne(
            {_id:orderId,
            userId}
        )
    
    } catch (err) {
        throw new ApplicationError("Somthing went wrong with the db",500)
    }
    
        }
    
        async cancelOrder(orderId,userId){
    try {
       return await orderModels.findOneAndUpdate(
            {_id:orderId,
                userId:userId
            },
            {
                $set:{
                    orderStatus:"Cancelled"
                }
            }
        )
    } catch (err) {
        throw new ApplicationError("Somthing went wrong with the db",500)
    }
    
        }
    
        async updateOrderStatus(orderId, status){
    try {
      return  await orderModels.findByIdAndUpdate(
            {orderId},
            {
                $set:{
                    orderStatus:status
                }
            }
        
        )
    } catch (err) {
        throw new ApplicationError("Somthing went wrong with the db",500)
    }
    
        }
    
}