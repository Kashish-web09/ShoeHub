import { ObjectId } from "mongodb";
import { getDb } from "../../../config/mongoDb.js";
import { ApplicationError } from "../../../errorFile/applicationError.js";

export default class SellerProductRepo{
    constructor(){
        this.collection="product"
    }
    async getAllProducts(sellerId){
try{
        const db=getDb();
    const collection=db.collection(this.collection);
    return await collection.find({sellerId:sellerId}).toArray();
}catch(err){
    throw new ApplicationError("Something went wrong with db",500)
}
   }

// 3. 
async addProduct(data){
try {
            const db=getDb();
    const collection=db.collection(this.collection);
return await collection.insertOne(data);
} catch (err) {

        throw new ApplicationError("Something went wrong with db",500)

}
}
async getProductById(productId) {
    const db = getDb();
    const collection = db.collection(this.collection);

    return await collection.findOne({
        _id: new ObjectId(productId)
    });
}
// // 4. to get the update page
async updateProduct(productId,updatedProduct){

    try {       
             const db=getDb();
    const collection=db.collection(this.collection);
return await collection.updateOne(
    {_id:new ObjectId(productId)},
    {
        $set:updatedProduct
    }

       
)
        
    } catch (err) {
                throw new ApplicationError("Something went wrong with db",500)

    }
}
async deleteProduct(productId){
try {
                 const db=getDb();
    const collection=db.collection(this.collection);
return await collection.deleteOne(
    {_id:new ObjectId(productId)}
)
} catch (err) {
                    throw new ApplicationError("Something went wrong with db",500)

}
}
async getProductCount(sellerId){

}
async getOutOfStockProduct(sellerId){
try {
                     const db=getDb();
    const collection=db.collection(this.collection);
const products = await collection.find({stock:0}).toArray();
console.log(products);

return products;
} catch (err) {
                        throw new ApplicationError("Something went wrong with db",500)

}
}

}