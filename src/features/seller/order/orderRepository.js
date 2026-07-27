import mongoose from "mongoose";
import {orderSchema } from "../../order/orderSchema.js";
import { ApplicationError } from "../../../errorFile/applicationError.js";


const orderModel=mongoose.models.orders || mongoose.model('orders',orderSchema)

export default class sellerOrderRepo{
       async getSellerOrders(){
        try {
          return await orderModel.find();
        } catch (err) {
            throw new ApplicationError("Something wrong with db",500)
        }
       }
    
    async getOrderById(orderId){
            try {
          return  await orderModel.findOne({_id:orderId});
        } catch (err) {
            throw new ApplicationError("Something wrong with db",500)
        }
    
    }
    
    async updateOrderStatus(orderId, status){
            try {
            return await orderModel.findOneAndUpdate(
                {_id:orderId},
    {            $set:{
                    orderStatus:status
                }
    } ,
    {
        new:true
    }
       )
        } catch (err) {
            throw new ApplicationError("Something wrong with db",500)
        }
    
    }
    
    async cancelOrder(orderId,status){
            try {
return await orderModel.findOneAndUpdate(
    {_id:orderId},
    {
        $set:{
            status:"Cancelled"
        }
    },
    {
        new:true
    }
)
            } catch (err) {
            throw new ApplicationError("Something wrong with db",500)
        }
    
    }
    
    
    async getRevenue(){
        try {
            const result=await orderModel.aggregate([
                {
                    $match:{
                        orderStatus:"Delivered"
                    }
                },
                {
                    $group:{
                        _id:null,
                        revenue:{
                            $sum:"$totalAmount"
                        }
                    }
                }
            ]);
            return result.length ? result[0].revenue :0
        } catch (err) {
                        throw new ApplicationError("Somthing wron with db",500)
    
        }
    }
    async getRecentOrders(){
        try {
    return await orderModel.find().sort({createdAt:-1}).limit(4);
        } catch (err) {
                                throw new ApplicationError("Somthing wron with db",500)
    
        }
    }
    async filterOrder(customerName,payment,status){
    try {
            let query={};
    if(customerName){
        query.customerName={
            $regex:customerName,
            $options:"i"
        }
    }
    if(payment){
        query.paymentMethod=payment
    }
    if(status){
        query.orderStatus=status
    }
    return await orderModel.find(query);
    } catch (err) {
                                    throw new ApplicationError("Somthing wron with db",500)
    
    }
    }
}