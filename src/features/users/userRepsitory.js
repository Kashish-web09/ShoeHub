import { ObjectId } from 'mongodb';
import {getDb} from '../../config/mongoDb.js'
import { ApplicationError } from '../../errorFile/applicationError.js'

class userRepository{
    constructor() {
        this.collection="users";
    }
async signUp(newUser){
    try {
        const db=getDb();
        const collection=db.collection(this.collection)

      const result=   await db.collection("users").insertOne(newUser)
         return {...newUser,_id:result.insertedId};
    } catch (error) {

        throw new ApplicationError("Somthing went wrong with the database",500)
    }
}
async getAllUsers(){
    try {
        const db=getDb();
        return await db.collection("users").find().toArray();
    } catch (err) {
                throw new ApplicationError("Somthing went wrong with the database",500)

    }
}
async findUser(email){
    try {
        const db=getDb();
        const collection=db.collection(this.collection);
        return await collection.findOne({email})
    } catch (error) {

                throw new ApplicationError("Something went wrong with the database",500)

    }
}
async getUserById(userId){
    try {
                const db=getDb();
        const collection=db.collection(this.collection);
        return await collection.findOne(
            {_id:new ObjectId(userId)}
        )

    } catch (err) {
                        throw new ApplicationError("Something went wrong with the database",500)

    }
}
async resetPass(token,hashedPassword){
try {
            const db=getDb();
        const collection=db.collection(this.collection);
      const result=  await collection.updateOne(
        {
            resetToken:token,
            resetTokenExpiry:{$gt:new Date()}
        },
        {
            $set:{
                password:hashedPassword
            },
            $unset:{
                resetToken:"",
                resetTokenExpiry:""
            }
        }
        );
        if(result.matchedCount===0){
            throw new ApplicationError("User not found",404)
        }
        return result;
    

} catch (err) {
                    throw new ApplicationError("Something went wrong with the database",500)

}
}
async forgotPass(email){
    try {
            const db=getDb();
        const collection=db.collection(this.collection);
        return await collection.findOne({email})

} catch (err) {
                    throw new ApplicationError("Something went wrong with the database",500)

}

}
async saveResettoken(email,token,expiry){
    try {
        const db=getDb();
        const collection=db.collection(this.collection);
        await collection.updateOne(
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
}
export default userRepository;