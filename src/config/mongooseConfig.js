import mongoose from "mongoose";
import dotenv from 'dotenv';
import logger from "./logger.js";
dotenv.config();

const url=process.env.DB_URL;
export const connectMongooseDb=async()=>{
    try {
        await mongoose.connect(url);
            logger.info("✅ MongoDB connected with mongoose");

    } catch (err) {
        logger.error(`MongoDb mongoose connection failed: ${err.message}`)

    }
}