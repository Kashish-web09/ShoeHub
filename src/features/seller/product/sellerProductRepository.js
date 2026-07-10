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
async getProductById(productId,sellerId) {
    const db = getDb();
    const collection = db.collection(this.collection);

    return await collection.findOne({
        _id: new ObjectId(productId),
        sellerId:sellerId
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
async getOutOfStockProduct(sellerId){
try {
                     const db=getDb();
    const collection=db.collection(this.collection);
const products = await collection.find({stock:0}).toArray();

return products;
} catch (err) {
                        throw new ApplicationError("Something went wrong with db",500)

}
}
    async filterProduct(gender,category,price){
try {
            const db=getDb();
        const collection=db.collection(this.collection);
        let filter={};
       if(gender){
        filter.gender={
            $regex:gender,
            $options:"i"
        }
       }
       if(category){
        filter.category=category
       }
       if(price){
        switch(price){
            case "0-2500":
                filter.price={$lte:2500};
                break;
                case "2501-6000":
                    filter.price={
                        $gte:2501,
                        $lte:6000
                    };
                    break;
                     case "6001-10000":
                    filter.price = {
                        $gte: 6001,
                        $lte: 10000
                    };
                    break;

                case "10000+":
                    filter.price = {
                        $gte: 10000
                    };
                    break;
            
        }
       }

        
        return await collection.find(filter).toArray();

} catch (err) {
    throw new ApplicationError("Somthing went wrong with the database",500)
}

    }

}