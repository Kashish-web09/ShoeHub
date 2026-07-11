import { ObjectId } from "mongodb";
import { getDb } from "../../../config/mongoDb.js"
import { ApplicationError } from "../../../errorFile/applicationError.js"

export default class sellerUserRepository{
constructor(){
this.collection="sellerAcc"
}

async findUser(email){
    try {
        const db=getDb();
        const collection=db.collection(this.collection);
        const allSellers=await collection.find({}).toArray();

       return await collection.findOne({email})
    } catch (err) {
            throw new ApplicationError("Somthing wron with db",500)

    }
}

async register(seller){
try{
    const db=getDb();
const collection=db.collection(this.collection);
return await collection.insertOne(seller);
}catch(err){
    throw new ApplicationError("Somthing wron with db",500)
}
}
async findById(id){
    try {
            const db=getDb();
const collection=db.collection(this.collection);
return await collection.findOne({
    _id:new ObjectId(id)
})
    } catch (err) {
            throw new ApplicationError("Something wron with db",500)

    }
}
async resetPass(token, hashedPassword) {
    try {
        const db = getDb();
        const collection = db.collection(this.collection);

        const result = await collection.updateOne(
            {
                resetToken: token,
                resetTokenExpiry: { $gt: new Date() }
            },
            {
                $set: {
                    password: hashedPassword,
                    resetToken: "",
                    resetTokenExpiry: null
                }
            }
        );

        return result;

    } catch (err) {
        throw new ApplicationError("Something wrong with db", 500);
    }
}
async forgotPass(email){
try {
    const db=getDb();
    const collection=db.collection(this.collection);
    return await collection.findOne({email})
} catch (err) {
                throw new ApplicationError("Something wron with db",500)

}
}
async saveResetPass(email,token,expiry){
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
                    throw new ApplicationError("Something wron with db",500)

}
}
}