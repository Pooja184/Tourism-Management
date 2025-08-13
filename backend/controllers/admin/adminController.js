import adminModel from "../../models/adminModel.js"
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
const adminRegister=async(req,res)=>{
   try {
     const {name,email,password} = req.body
 
     const exist= await adminModel.findOne({email});
 
     if(exist){
         return res.json({success:false,message:"Admin already exist"});
     }
 
     if(!validator.isEmail(email)){
        res.json({success:false,message:"Enter valid password"});
     }
     if(password.length<8){
        res.json({success:false,message:"Enter a strong password"});
     }

      const salt = await bcrypt.genSalt(10);
         const hashedPassword = await bcrypt.hash(password, salt);

         const newAdmin= new adminModel({
            name,
            email,
            password:hashedPassword
         });
    const admin = await newAdmin.save();

         const adminToken=createToken(admin._id);
    res.json({ success: true, adminToken ,admin});

   } catch (error) {
    // console.log(error)
    res.json({success:false,message:error.message});
   }

}

const adminLogin=async(req,res)=>{
   try {
      const {email,password}=req.body;
   
      const admin=await adminModel.findOne({email});
      if(!admin){
         return res.json({success:false,message:"Admin doesn't exist"});
      }
   
   
      const isMatch=await bcrypt.compare(password,admin.password);
   
      if(isMatch){
         const adminToken=createToken(admin._id);
   
         res.json({success:true,adminToken,admin});
      }else{
         res.json({success:false,message:"Invalid credentials"});
      }
   } catch (error) {
      console.log(error.message);
      res.json({success:false,message:error.message})
   }

}

export {adminRegister,adminLogin}