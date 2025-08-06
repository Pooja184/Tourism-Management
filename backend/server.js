import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import adminRouter from './routes/adminRoute.js';


const app=express();
const port=process.env.PORT || 4000;
connectDB()
connectCloudinary();

app.use(express.json());
app.use(cors());

//ap endpoints
app.use('/api/user',userRouter);
app.use('/api/admin',adminRouter);
app.get('/',(req,res)=>{
    res.send("API working");
})

app.listen(port,()=>console.log(`Server is running on port ${port}`))