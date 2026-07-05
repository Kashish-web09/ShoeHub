import { ObjectId } from "mongodb";
import { getDb } from "../../config/mongoDb.js";
import { ApplicationError } from "../../errorFile/applicationError.js";


export default class wishRepository{
    constructor(){
        this.collection="wishlistItem"
    }

    async addItem(productId,userId){
        try {
            const db=getDb();
            const collection=db.collection(this.collection);
            const result=await collection.updateOne(
                {
                    productId:new ObjectId(productId),
                    userId:new ObjectId(userId)
                },
                {
$setOnInsert:{
    productId:new ObjectId(productId),
    userId:new ObjectId(userId)
}
                },
                {
                    upsert:true
                }
            );
            console.log(result);
            return result;
        } catch (err) {
            console.log(err)
            throw new ApplicationError("Somthing went wrong with the database",500)
        }
    }
async getItem(userId) {
    try {
        const db = getDb();
        const collection = db.collection(this.collection);

        const result = await collection.aggregate([
            {
                $match: {
                    userId: new ObjectId(userId)
                }
            },
            {
                $lookup: {
                    from: "products",
                    localField: "productId",
                    foreignField: "_id",
                    as: "product"
                }
            },
            {
                $unwind: "$product"
            }
        ]).toArray();

        console.log(result);
        return result;

    } catch (err) {
        console.log(err);
        throw new ApplicationError("Something went wrong with the database", 500);
    }
}
    async deleteItem(userId,wishlistItemId){
                try {
            const db=getDb();
            const collection=db.collection(this.collection);
            const result=await collection.deleteOne(
                {userId:new ObjectId(userId),
                    _id:new ObjectId(wishlistItemId)
                }
            );
            console.log("Deleted")
            return result
        } catch (err) {
            throw new ApplicationError("Somthing went wrong with the database",500)
        }

    }
}