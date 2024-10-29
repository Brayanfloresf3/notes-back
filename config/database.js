import mongoose from "mongoose";

const url = process.env.MONGO_URL;

console.log(url);

async function connect() {
    try {
        await mongoose.connect(url);
        console.log("Database connected");
    } catch (error) {        
        console.log(error);     
    }
}

connect();