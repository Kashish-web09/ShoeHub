import mongoose from "mongoose";
import { Schema } from "mongoose";


export const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    resetPasswordToken:{
        type:String
    }
})


