import dotenv from 'dotenv';
dotenv.config();
console.log(dotenv.config());
console.log(process.env.EMAIL);
console.log(process.env.EMAIL_PASSWORD);
import app from "./app.js";
import {connectDb} from './config/mongoDb.js'

const PORT = process.env.PORT || 4090;
const startServer=async()=>{
    try {
        await connectDb();
        app.listen(PORT, () => {

    console.log(`🚀 Server running on http://localhost:${PORT}`);
});

    } catch (err) {
     console.log("Failed to connect to MongoDb",err)   
    }
};
startServer();


