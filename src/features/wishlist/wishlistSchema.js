import mongoose from "mongoose";

export const wishlistSchema=new mongoose.Schema({
productId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'product'},
userId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'user'}
})
