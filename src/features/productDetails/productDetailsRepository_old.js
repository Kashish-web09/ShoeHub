import { ObjectId } from "mongodb";
import { getDb } from "../../config/mongoDb.js";
import { ApplicationError } from "../../errorFile/applicationError.js";
export default class productDetailRepo{
    constructor(){
        this.collection="product";
    }

   async addProduct(product) {
try{    const db=getDb();
    const collection=db.collection(this.collection);
    return await collection.insertOne(product)
}catch(err){
    throw new ApplicationError("Something wrong with db",500)
}
   }


   async getProductById(productId) {
        try {
        const db=getDb();
        const collection=db.collection(this.collection)
        return await collection.findOne(
            {_id:new ObjectId(productId)}
        )
    } catch (err) {
            throw new ApplicationError("Something wrong with db",500)

    }

   }



}
