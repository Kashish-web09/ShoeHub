import { ObjectId } from "mongodb";
import { getDb } from "../../config/mongoDb.js"
import { ApplicationError } from "../../errorFile/applicationError.js"


export default class profileRepo{
    constructor() {
        this.collection="users"
    }

    async getUserProfile(userId){
try {
    const db=getDb();
    const collection=db.collection(this.collection)
    return await collection.findOne(
        {
            _id:new ObjectId(userId)
        }
    )
} catch (err) {
    throw new ApplicationError("Somethig wrong with db",500)
}
    }

    async updateUserProfile(userId,data){
try {
        const db=getDb();
    const collection=db.collection(this.collection)
    return await collection.updateOne(
        {_id:new ObjectId(userId)},
        {
            $set:data
        }
    )

} catch (err) {
    throw new ApplicationError("Somethig wrong with db",500)
}

    }
}