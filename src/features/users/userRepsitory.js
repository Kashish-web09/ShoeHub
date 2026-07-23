import mongoose from "mongoose";
import { userSchema } from "./userSchema.js";
import { ApplicationError } from "../../errorFile/applicationError.js";
const userModel=new mongoose.model('Users',userSchema);

export default class userRepository{
    async signUp(user){
        try {
            const newUser=new userModel(user);
await newUser.save();
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
    async resetPass(token,hashedPassword){
    try {
          return await userModel.updateOne(
            {
                resetToken:token,
                resetTokenExpiry:{$gt:new Date()}
            },
            {
                $set:{
                    password:hashedPassword,
                    resetToken:null,
                    resetTokenExpiry:null
                },

            }
            );
        
    
    } catch (err) {
                        throw new ApplicationError("Something went wrong with the database",500)
    
    }
    }
    async saveResettoken(email,token,expiry){
        try {
return await userModel.updateOne(
                {email},
                {
                    $set:{
                        
                        resetToken:token,
                        resetTokenExpiry:expiry
                    }
                }
            )
        } catch (err) {
                                throw new ApplicationError("Something went wrong with the database",500)
    
        }
    }
    
    async getAll(){
        try {
            return await userModel.find();
        } catch (err) {
                                    throw new ApplicationError("Something went wrong with the database",500)

        }
    }
}