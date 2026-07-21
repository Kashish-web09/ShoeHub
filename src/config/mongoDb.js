
import { MongoClient } from "mongodb";
let client;

export const connectDb = async () => {
  try {
    client = new MongoClient(process.env.DB_URL);

    await client.connect();


  } catch (err) {
    throw err;
  }
};


export const getDb = () => {
    if (!client) {
        throw new Error("Database is not connected.");
    }
    return client.db();
};