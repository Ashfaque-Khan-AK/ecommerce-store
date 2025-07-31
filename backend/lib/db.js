import mongoose from "mongoose";

export const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MONOGDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("Error in connecting MONGODB: ",error.message);
        
    }
}