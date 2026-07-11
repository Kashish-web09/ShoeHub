
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
    async filterProduct(name,brand,sort){
try {
            const db=getDb();
        const collection=db.collection(this.collection);
        let filter={};
        if(name){
            filter.name={
                $regex:name,
                $options:"i"
            }

        }
        if(brand){
            filter.brand={
                $regex:brand,
                $options:"i"
            }
        }
        let sortOptions={};
        if(sort==="lowToHigh"){
            sortOptions.price=1;
        }else if(sort==="highToLow"){
            sortOptions.price=-1;
        }else if(sort==="newest"){
            sortOptions.createdAt=-1;
        }
        const result=await collection.find(filter).sort(sortOptions).toArray();
        return result;

} catch (err) {
    throw new ApplicationError("Somthing went wrong with the database",500)
}

    }
async rateproduct(productId, userId, rating) {
    try {
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
    console.log("gethome",err)
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