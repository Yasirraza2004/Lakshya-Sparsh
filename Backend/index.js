import express from "express";
import connectDB from "./src/Config/database.js";
import config from "./src/Config/config.js";


const app = express();

connectDB()
.then(() => {   
    app.listen(config.PORT, () => {
        console.log(`Server is running at port: ${config.PORT}`);
    })
})
.catch((err) => {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
})