
import { ObjectId } from "mongodb";
import { getDb } from "../../config/mongoDb.js";
import {ApplicationError} from '../../errorFile/applicationError.js'

export default class productRepository{
    constructor(){
        this.collection="product";
    }

    async addProduct(product){
try {
            const db=getDb();
        const collection=db.collection(this.collection);
return await collection.insertOne(product);

} catch (err) {
    throw new ApplicationError("Somthing went wrong with the database",500)
}
    }
    async getAllProduct(){
try {
            const db=getDb();
        const collection=db.collection(this.collection);
        return await collection.find().toArray();

} catch (err) {
    throw new ApplicationError("Somthing went wrong with the database",500)
}

    }
    async getOneProduct(id){
try {
            const db=getDb();
        const collection=db.collection(this.collection);
        return await collection.findOne({
            _id:new ObjectId(id)
        });

} catch (err) {
    throw new ApplicationError("Somthing went wrong with the database",500)
}

    }
    async filterProduct(minPrice,maxPrice,category){
try {
            const db=getDb();
        const collection=db.collection(this.collection);
        let filter={};
        if(minPrice || maxPrice){
            filter.price={};
            if(minPrice){
                filter.price={$gte:parseFloat(minPrice)}
            }
            if(maxPrice){
                filter.price={$lte:parseFloat(maxPrice)}
            }
            if(category!=-undefined){
                filter.category=category;
            }
        }
        const result=await collection.find(filter).toArray();
        return result;

} catch (err) {
    throw new ApplicationError("Somthing went wrong with the database",500)
}

    }
    async rateproduct(productId,userId,rating){
try {
            const db=getDb();
            const collection=db.collection(this.collection)
console.log("productId:", productId);
console.log("userId:", userId);
console.log("rating:", rating);

        await collection.updateOne({
            _id:new ObjectId(productId)
        },
    {
        $pull:{
ratings:{userId:new ObjectId(userId)} // to delte old one
    }

    })

    await collection.updateOne({
        _id:new ObjectId(productId)
    },{
        $push:{ //to add new 
            ratings:{
                userId:new ObjectId(userId),
                rating:Number(rating)
            }
        }
    }
);
return true;

} catch (err) {
        console.error("Rate product error:", err); // IMPORTANT DEBUG

    throw new ApplicationError("Somthing went wrong with the database",500)
}

    }
async deleteProductById(id){
try {
            const db=getDb();
        const collection=db.collection(this.collection);
        const result=await collection.deleteOne({
            _id:new ObjectId(id)
        });
        return result;

} catch (err) {
    throw new ApplicationError("Somthing went wrong with the database",500)
}

}
async getHomeProducts(){
try{
        const db=getDb();
    const collection=db.collection(this.collection);
    return await collection.find({}).sort({_id:-1}).limit(4).toArray();

}catch (err) {
            throw new ApplicationError("Somthing went wrong with the database",500)

    }
}
async getBestSellerProducts(){
    try {
            const db=getDb();
    const collection=db.collection(this.collection);
    return await collection.find({
        isBestSeller:true
    }).limit(4).toArray();

    } catch (err) {
        console.log(err)
            throw new ApplicationError("Somthing went wrong with the database",500)

    }
}
}