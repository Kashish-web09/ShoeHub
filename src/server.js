import dotenv from 'dotenv';
dotenv.config()
import app from "./app.js";
import {connectDb} from './config/mongoDb.js'

const PORT = process.env.PORT || 4090;

app.listen(PORT, () => {

    console.log(`🚀 Server running on http://localhost:${PORT}`);
    connectDb();
});

