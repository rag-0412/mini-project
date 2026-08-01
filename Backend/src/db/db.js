import { configDotenv } from "dotenv";
import mongoose from "mongoose";


configDotenv();
const uri = process.env.DB_URL;

async function dbConnection(){

    try {
        await mongoose.connect(uri)
        console.log("DataBase Connection Successed..")
        
    } catch (error) {
        console.log("Error connecting DataBase")
    }
    
}

export default dbConnection;