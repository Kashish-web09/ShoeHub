import { ObjectId } from "mongodb";
import { getDb } from "../../../config/mongoDb.js";
import { ApplicationError } from "../../../errorFile/applicationError.js";

export default class profileRepo{
    constructor(){
        this.collection="sellerAcc"
    }

    async getSellerProfile(sellerId){
        try {
            const db=getDb();
const collection=db.collection(this.collection);
return await collection.findOne(
    {_id:new ObjectId(sellerId)}
)

        } catch (err) {
            throw new ApplicationError("Something wrong with db",500)
        }
    }
    async updateSellerProfile(sellerId,data){
        try {
            const db=getDb();
            const collection=db.collection(this.collection);
            return await collection.updateOne(
                {_id:new ObjectId(sellerId)},
                {
                    $set:data
                    
                }
            )
        } catch (err) {
                        throw new ApplicationError("Something wrong with db",500)

        }
    }
}