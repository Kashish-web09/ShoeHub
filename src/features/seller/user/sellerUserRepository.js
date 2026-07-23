import mongoose from "mongoose";
import { sellerUserSchema } from "./sellerUserSchema.js";
import { ApplicationError } from "../../../errorFile/applicationError.js";

const sellerModel=mongoose.model('sellerAcc',sellerUserSchema);

export default class sellerUserRepository{
async register(sellerUser){
try{
    const newUser=new sellerModel(sellerUser);
    await newUser.save();
    return newUser
}catch(err){
    throw new ApplicationError("Somthing wron with db",500)
}
}
async findById(sellerId){
try {
    return await sellerModel.findById(sellerId)
} catch (err) {
        throw new ApplicationError("Somthing wron with db",500)

}
}
async findUser(email){
    try {
        return await sellerModel.findOne({email})
    } catch (err) {
            throw new ApplicationError("Something wron with db",500)

    }
}
async forgotPass(email){
try {
    return await sellerModel.findOne({email})
} catch (err) {
                throw new ApplicationError("Something wron with db",500)

}
}
async resetPass(token, hashedPassword) {
    try {
return await sellerModel.updateOne(
    {
        resetToken:token,
        resetTokenExpiry:{$gt:new Date()}
    },
    {
        $set:{
            password:hashedPassword,
            resetToken:null,
            resetTokenExpiry:null
        }
    }
)
    } catch (err) {
        
        throw new ApplicationError("Something wrong with db", 500);
    }
}

async saveResetPass(email,token,expiry){
try {
return await sellerModel.updateOne(
    {email},
    {
        $set:{
            resetToken:token,
            resetTokenExpiry:expiry
        }
    }
)
} catch (err) {
                    throw new ApplicationError("Something wron with db",500)

}
}

}
