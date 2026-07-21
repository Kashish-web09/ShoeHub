
import { MongoClient } from "mongodb";
import logger from "./logger.js";
let client;

export const connectDb = async () => {
  try {
    client = new MongoClient(process.env.DB_URL);

    await client.connect();

    logger.info("✅ MongoDB connected");

  } catch (err) {
logger.error(`MongoDb connection failed: ${err.message}`)
  }
};


export const getDb = () => {
    if (!client) {
        throw new Error("Database is not connected.");
    }
    return client.db();
};