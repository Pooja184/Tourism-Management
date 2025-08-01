import mongoose from "mongoose";
import 'dotenv/config'; 
const connectDB = async ()=>{
    mongoose.connection.on('connected',()=>{
        console.log("DB connected");
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/tourismManagement`)
}

export default connectDB;   