import mongoose from "mongoose";
import { Schema } from "mongoose";

export const productDetailSchema=new mongoose.Schema({
   name:{type:String,required:true,trim:true},
        brand:{type:String,required:true,trim:true},
        category:{type:String,required:true},
        price:{type:Number,required:true,min:1},
        stock:{type:Number,required:true,min:0},
        images:{type:[String],required:true,default:[]},
        desc:{type:String,required:true},
        features:{type:String,required:true,trim:true},
 rating: {
            type: Number,
            default: 0,
            min: 0,
            max: 5
        },
                sellerId:{type:mongoose.Schema.Types.ObjectId,ref:"Seller",required:true},
        isBestSeller:{type:Boolean,default:false},
           },
        {
            timestamps:true
            
        }
        )
