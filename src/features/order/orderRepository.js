import { ObjectId } from "mongodb";
import { getDb } from "../../config/mongoDb.js"
import { ApplicationError } from "../../errorFile/applicationError.js"
export default class orderRepository{
    constructor(){
        this.collection="orders"
    }
    async placeOrder(order){
try {
    const db=getDb();
    const collection=db.collection(this.collection);
        return await collection.insertOne(order);

} catch (err) {
    throw new ApplicationError("Somthing went wrong with the db",500)
}
    }
    async getAllOrders(){
try {
    const db=getDb();
    const collection=db.collection(this.collection)
    return await collection.find().toArray();
} catch (err) {
    throw new ApplicationError("Somthing went wrong with the db",500)
}

    }
        async getOrderByUserId(userId){
try {
    const db=getDb();
    const collection=db.collection(this.collection)
   return await collection.find({userId}).toArray();
} catch (err) {
    throw new ApplicationError("Somthing went wrong with the db",500)
}

    }
    async getOrderById(orderId,userId){
try {
    const db=getDb();
    const collection=db.collection(this.collection)

 return  await collection.findOne(
        {_id:new ObjectId(orderId),
            userId:userId
        }
    )
} catch (err) {
    throw new ApplicationError("Somthing went wrong with the db",500)
}

    }
    async cancelOrder(orderId,userId){
try {
    const db=getDb();
    const collection=db.collection(this.collection);
   return await collection.updateOne(
        {_id:new ObjectId(orderId),
            userId:new ObjectId(userId)
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
    const db=getDb();
    const collection=db.collection(this.collection)
  return  await collection.updateOne(
        {_id:new ObjectId(orderId)},
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