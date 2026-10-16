import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            config.MONGODB_URI
        );

        console.log(
            `MongoDB connected: DB HOST: ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        throw error;
    }
};

export default connectDB;