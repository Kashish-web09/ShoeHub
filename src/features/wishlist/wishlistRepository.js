import mongoose from "mongoose";
import { wishlistSchema } from "./wishlistSchema.js";
import { ApplicationError } from "../../errorFile/applicationError.js";

const wishlistModels=mongoose.model('wishlist',wishlistSchema);
export default class wishRepository{
        async addItem(productId,userId){
            try {
               return await wishlistModels.updateOne(
                    {
                        productId:productId,
                        userId:userId
                    },
                    {
    $setOnInsert:{
        productId:productId,
        userId:userId
    }
                    },
                    {
                        upsert:true
                    }
                    
                );
            } catch (err) {
                throw new ApplicationError("Somthing went wrong with the database",500)
            }
        }
async getItem(userId) {
    try {
        return await wishlistModels
            .find({ userId })
            .populate("productId");

    } catch (err) {
        console.log(err)
        throw new ApplicationError("Something went wrong with the database", 500);
    }
}
        async deleteItem(userId,wishlistItemId){
                    try {
                return await wishlistModels.findOneAndDelete(
                    {userId:userId,
                        _id:wishlistItemId
                    }
                );
            } catch (err) {
                throw new ApplicationError("Somthing went wrong with the database",500)
            }
    
        }
    
}