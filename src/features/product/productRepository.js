import mongoose from "mongoose";
import { ApplicationError } from "../../errorFile/applicationError.js";
import { productSchema } from "../seller/product/sellerProductSchema.js";

const productModel=mongoose.models.product || mongoose.model("product",productSchema)

export default class productRepo{
        async addProduct(product){
    try {
const newProduct=new productModel(product);
await newProduct.save();
return newProduct  
    } catch (err) {
        throw new ApplicationError("Somthing went wrong with the database",500)
    }
        }
        async getAllProduct(){
    try {
              return await productModel.find();
    } catch (err) {
        throw new ApplicationError("Somthing went wrong with the database",500)
    }
    
        }
        async getOneProduct(id){
    try {
        return await productModel.findById(
            id
        );
    
    } catch (err) {
        throw new ApplicationError("Somthing went wrong with the database",500)
    }
    
        }
                async updateStock(productId,quantity){
            try {
    return await productModel.updateOne(
        {_id:productId,
            stock:{$gte:quantity}
        },
        {
            $inc:{
                stock:-quantity
            }
        },
        
    )
            } catch (err) {
                    throw new ApplicationError("Something went wrong with the db",500)
    
            }
        }
        async restoreStock(productId,quantity){
                    try {
    return await productModel.updateOne(
        {_id:productId},
        {
            $inc:{
                stock:quantity
            }
        },
    )
        }catch(err){
                    throw new ApplicationError("Something went wrong with the db",500)
    
        }
        }
        async filterProduct(name,brand,sort){
    try {
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
            const result=await productModel.find(filter).sort(sortOptions);
            return result;
    
    } catch (err) {
        throw new ApplicationError("Somthing went wrong with the database",500)
    }
    
        }
    async rateproduct(productId, userId, rating) {
        try {
    
            // Remove previous rating
            await productModel.updateOne(
                { _id: productId },
                {
                    $pull: {
                        ratings: {
                            userId: userId
                        }
                    }
                }
            );
    
            // Add new rating
            await productModel.updateOne(
                { _id:productId},
                {
                    $push: {
                        ratings: {
                            userId: userId,
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
            const result=await productModel.findByIdAndDelete({
                _id:id
            });
            return result;
    
    } catch (err) {
        throw new ApplicationError("Somthing went wrong with the database",500)
    }
    
    }
    async getHomeProducts(){
    try{
        return await productModel.find().sort({createdAt:-1}).limit(4);
    
    }catch (err) {
                throw new ApplicationError("Somthing went wrong with the database",500)
    
        }
    }
    async getBestSellerProducts(){
        try {
        return await productModel.find({
            isBestSeller:true
        }).sort({createdAt:-1}).limit(4);
    
        } catch (err) {
                throw new ApplicationError("Somthing went wrong with the database",500)
    
        }
    }
}