import { ApplicationError } from "../../errorFile/applicationError.js";
import {getDb } from "../../config/mongoDb.js";
import { ObjectId } from "mongodb";
import cartModels from "./cartModels.js";
export default class cartRepository{
    constructor(){
        this.collection="cartItems";
    }
    async addItem(productId,userId,quantity){
        try {
            console.log(productId);
            console.log(userId);
            const db=getDb();
            const collection=db.collection(this.collection);
            const qty=Number(quantity) || 1
const result= await collection.updateOne(
    {
        productId:new ObjectId(productId),
        userId:new ObjectId(userId)
    },
    {
        $inc:
        {
            quantity:qty
        },$setOnInsert:{
    productId:new ObjectId(productId),
    userId:new ObjectId(userId)
}

    },
    {
        upsert:true
    }
)
console.log(result);
return result;

        } catch (err) {
            console.log(err)
            throw new ApplicationError("Somthing went wrong with the database",500)
        }
    }
    async getItem(userId){
                try {
            const db=getDb();
            const collection=db.collection(this.collection);
            const productCollection=db.collection("products")
            const result=await collection.find({userId:new ObjectId(userId)}).toArray();
            for(let item of result){
item.product = await productCollection.findOne({
    _id: item.productId instanceof ObjectId 
        ? item.productId 
        : new ObjectId(item.productId)
        
});
            console.log("CART ITEM:", item);
console.log("PRODUCT FOUND:", item.product);

            }
            console.log(result);
            return result;
        } catch (err) {
            console.log(err)
            throw new ApplicationError("Somthing went wrong with the database",500)
        }

    }
async deleteCartItem(userId,cartItemId){
            try {
            const db=getDb();
            const collection=db.collection(this.collection);
            const result= await collection.deleteOne(
                {_id:new ObjectId(cartItemId),userId:new ObjectId(userId)}
            );
            return result;
        } catch (err) {
            throw new ApplicationError("Somthing went wrong with the database",500)
        }

}
    async clearCart(userId){
        try {
            const db=getDb();
            const collection=db.collection(this.collection);
            return await collection.deleteMany(
                {userId:new ObjectId(userId)}
            )
        } catch (err) {
                throw new ApplicationError("Something went wrong with the db",500)

        }
    }
async increaseQuantity(cartId){
    try {
        const db=getDb();
        const collection=db.collection(this.collection);
        return await collection.updateOne(
            {_id:new ObjectId(cartId)},
          {
            $inc:{
                quantity:1
            }
          }
        )
    } catch (err) {
                        throw new ApplicationError("Something went wrong with the db",500)

    }
}
async decreaseQuantity(cartId){
    try {
                const db=getDb();
        const collection=db.collection(this.collection);
const cartItems=await collection.findOne({_id:new ObjectId(cartId)});
if(!cartItems){
    throw new ApplicationError("cart item not found",500);
}
if(cartItems.quantity>1){
    await collection.updateOne(
        {_id:new ObjectId(cartId)},
        {
                $inc:{
        quantity:-1
    }

        }
    );
}else{
    await collection.deleteOne({_id:new ObjectId(cartId)})
}
    } catch (err) {
                        throw new ApplicationError("Something went wrong with the db",500)

    }
}

}
