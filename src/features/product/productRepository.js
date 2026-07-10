
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
async rateproduct(productId, userId, rating) {
    try {
console.log("REpo called")
 console.log(productId);
        console.log(userId);
        console.log(rating);
                const db = getDb();
        const collection = db.collection(this.collection);

        // Remove previous rating
        await collection.updateOne(
            { _id: new ObjectId(productId) },
            {
                $pull: {
                    ratings: {
                        userId: new ObjectId(userId)
                    }
                }
            }
        );
        console.log("Old rating removed")

        // Add new rating
        await collection.updateOne(
            { _id: new ObjectId(productId) },
            {
                $push: {
                    ratings: {
                        userId: new ObjectId(userId),
                        rating: Number(rating)
                    }
                }
            }
        );
                console.log("New rating added");


    } catch (err) {
        throw err;
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
            throw new ApplicationError("Somthing went wrong with the database",500)

    }
}
}