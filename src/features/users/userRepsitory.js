import mongoose from "mongoose";
import { userSchema } from "./userSchema.js";
import { ApplicationError } from "../../errorFile/applicationError.js";
import jwt from 'jsonwebtoken'
import { ObjectId, ReturnDocument } from "mongodb";
const userModel=new mongoose.model('Users',userSchema);

export default class userRepository{
    async signUp(user){
        try {
            const newUser=new userModel(user);
newUser.save();
            return newUser;
        } catch (err) {
            throw new ApplicationError("Somthing went wrong with the database",500)
        }
    }
    

    async findUser(email){
        try {
            return await userModel.findOne({email})
        } catch (err) {
                    throw new ApplicationError("Something went wrong with the database",500)
    
        }
    }
    async forgotPass(email){
        try {
    return await userModel.findOne({email});
    } catch (err) {
                        throw new ApplicationError("Something went wrong with the database",500)
    
    }
    
    }
    
    
}