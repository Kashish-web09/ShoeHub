import dotenv from 'dotenv';
dotenv.config();
import app from "./app.js";
import {connectDb} from './config/mongoDb.js'
import logger from './config/logger.js';
import { connectMongooseDb } from './config/mongooseConfig.js';

const PORT = process.env.PORT || 4090;
const startServer=async()=>{
    try {
        await connectMongooseDb();
        app.listen(PORT, () => {
logger.info(`Server running at ${PORT}`)
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});

    } catch (err) {
     logger.error("Failed to connect to MongoDb",{
        error:err.message
     })  
    }
};
startServer();


