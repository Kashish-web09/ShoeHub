import { MongoClient } from "mongodb";

let client;

export const connectDb = async () => {
    console.log("DB_URL:", process.env.DB_URL);

    client = await MongoClient.connect(process.env.DB_URL);

    console.log("MongoDB connected");

};

export const getDb = () => {
    if (!client) {
        throw new Error("Database is not connected.");
    }
    return client.db();
};