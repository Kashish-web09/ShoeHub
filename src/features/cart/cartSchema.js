import mongoose from "mongoose";
import { Schema } from "mongoose";

export const cartSchema=new mongoose.Schema({
productId:{type:mongoose.Schema.Types.ObjectId,ref:"product",required:true},
userId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"user"},
quantity:{type:Number,min:0,required:true}
})