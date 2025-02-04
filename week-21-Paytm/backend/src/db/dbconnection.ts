import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

export async function ConnectToDB(){
    try {
        await mongoose.connect(process.env.DB_URL as string);
        console.log("Database connected successfully!!");
    } catch (error) {
        console.log("ERROR while connecting to Database!", error);
        process.exit(1);        //terminate the whole process if can't connect to db.
    }
}