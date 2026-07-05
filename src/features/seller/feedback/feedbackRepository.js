import { ObjectId } from "mongodb";
import { getDb } from "../../../config/mongoDb.js";
import { ApplicationError } from "../../../errorFile/applicationError.js";

export default class feedbackRepo{
    constructor() {
        this.collection="feedback"
    }
    async getFeedback(){
        try {
            const db=getDb();
            const collection=db.collection(this.collection);
            return await collection.find().toArray();
        } catch (err) {
            throw new ApplicationError("Something wrong with db",500)
        }
    }
    async updateStatus(feedbackId,status){
        try {
                                    const db=getDb();
            const collection=db.collection(this.collection);
return await collection.updateOne(
    {_id:new ObjectId(feedbackId)},
    {
        $set:{
            status:status
        }
    }
)

        } catch (err) {
            console.log(err)
                        throw new ApplicationError("Something wrong with db",500)

        }
    }
}