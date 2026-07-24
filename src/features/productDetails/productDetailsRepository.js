import mongoose from "mongoose";
import { productDetailSchema } from "./productDetailsSchema.js";
import { ApplicationError } from "../../errorFile/applicationError.js";
const productDetailModel=    mongoose.models.product ||
    mongoose.model('product', productDetailSchema);

    export default class productDetailRepo{
           async addProduct(product) {
        try{ 
            const newProduct=mongoose.productDetailModel(product);
            await newProduct.save();
            return newProduct
        }catch(err){
            throw new ApplicationError("Something wrong with db",500)
        }
           }
        
        
           async getProductById(productId) {
                try {
                    return await productDetailModel.findById({_id:productId})
            } catch (err) {
                    throw new ApplicationError("Something wrong with db",500)
        
            }
        
           }
        
    }