import userModel from "../models/userModel.js";
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken=(id)=>{
    return  jwt.sign({id},process.env.JWT_SECRET);
}

const userRegister=async(req,res)=>{
    try {
        const {name,email,password}=req.body;

        const exist= await userModel.findOne({email});

        if(exist){
           return res.json({sucess:false,message:"User Already exist"});
        }
         if(!validator.isEmail(email)){
                return res.json({success:false,message:"Please enter valid email."})
           }
        
        if(password.length<8){
            return res.json({success:false,message:"Please enter a strong password"})
        }

        const salt=await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(password,salt);

        const newUser=new userModel({
            name,
            email,
            password:hashedPassword
        })

        const user=await newUser.save();

        const token=createToken(user._id);
        res.json({success:true,token});

    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export {userRegister};