import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';


const app=express();
const port=process.env.PORT || 4000;
connectDB()
connectCloudinary();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("API working");
})

app.listen(port,()=>console.log(`Server is running on port ${port}`))