import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const dbConnect = process.env.MONGO_URI

const connectDB = async() => {
    try {
        await mongoose.connect(dbConnect, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Connect to MongoDB");
    }
    catch(error) {
        console.log("Connection error", error)
    }
}

export default connectDB