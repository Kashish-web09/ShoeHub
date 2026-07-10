import { ObjectId } from "mongodb";
import { getDb } from "../../../config/mongoDb.js";
import { ApplicationError } from "../../../errorFile/applicationError.js";

export default class sellerOrderRepo{
    constructor(){
        this.collection="orders"
    }
   async getSellerOrders(){
    try {
        const db=getDb();
        const collection=db.collection(this.collection);
      return  await collection.find().toArray();
    } catch (err) {
        throw new ApplicationError("Something wrong with db",500)
    }
   }

async getOrderById(orderId){
        try {
        const db=getDb();
        const collection=db.collection(this.collection);
      return  await collection.findOne(
           { _id:new ObjectId(orderId)}
        )
    } catch (err) {
        console.log(err)
        throw new ApplicationError("Something wrong with db",500)
    }

}

async updateOrderStatus(orderId, status){
        try {
        const db=getDb();
        const collection=db.collection(this.collection);
        return await collection.updateOne(
            {_id:new ObjectId(orderId)},
{            $set:{
                orderStatus:status
            }
}        )
    } catch (err) {
        throw new ApplicationError("Something wrong with db",500)
    }

}

async cancelOrder(orderId){
        try {
        const db=getDb();
        const collection=db.collection(this.collection);
    } catch (err) {
        throw new ApplicationError("Something wrong with db",500)
    }

}

async updateTracking(orderId, trackingNumber, courier){
        try {
        const db=getDb();
        const collection=db.collection(this.collection);
    } catch (err) {
        throw new ApplicationError("Something wrong with db",500)
    }

}

async getPendingOrders(){
        try {
        const db=getDb();
        const collection=db.collection(this.collection);
    } catch (err) {
        throw new ApplicationError("Something wrong with db",500)
    }

}

async getDeliveredOrders(){
        try {
        const db=getDb();
        const collection=db.collection(this.collection);
    } catch (err) {
        throw new ApplicationError("Something wrong with db",500)
    }

}

async getCancelledOrders(){
        try {
        const db=getDb();
        const collection=db.collection(this.collection);
    } catch (err) {
        throw new ApplicationError("Something wrong with db",500)
    }

}

async getRevenue(){
    try {
        const db=getDb();
        const collection=db.collection(this.collection);
        const orders=await collection.find({
            orderStatus:"Delivered"
        }).toArray();
        let revenue=0;
        for(const order of orders){
            revenue+=order.totalAmount;
        }
        return revenue;
    } catch (err) {
                    throw new ApplicationError("Somthing wron with db",500)

    }
}
async getRecentOrders(){
    try {
                const db=getDb();
        const collection=db.collection(this.collection);
return await collection.find().sort({createdAt:-1}).limit(4).toArray();
    } catch (err) {
                            throw new ApplicationError("Somthing wron with db",500)

    }
}
async filterOrder(customerName,payment,status){
try {
                    const db=getDb();
        const collection=db.collection(this.collection);
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
return await collection.find(query).toArray();
} catch (err) {
                                throw new ApplicationError("Somthing wron with db",500)

}
}
}