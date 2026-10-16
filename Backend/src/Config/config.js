import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})

if(!process.env.PORT) {
    throw new Error("PORT is not defined in environment variables");
}

if(!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in environment variables");
}

const config = {
    PORT : process.env.PORT || 8080,
    MONGODB_URI : process.env.MONGODB_URI,
}

export default config;
