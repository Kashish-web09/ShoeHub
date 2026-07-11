import { MongoClient } from "mongodb";

let client;
export const connectDb = async () => {
    try {
        console.log("DB_URL:", process.env.DB_URL); // <-- Add this
        client = await MongoClient.connect(process.env.DB_URL);
        console.log("MongoDB connected");
        createIndex(client.db());
    } catch (error) {
        console.log(error);
    }
}
 export const getDb=()=>{
        return client.db();
    }
    const createIndex=async(db)=>{
        try {
            await db.collection("products").createIndex({name:1,price:-1});
            await db.collection("products").createIndex({category:"text"});
        } catch (error) {
            console.log(error)
        }
    }