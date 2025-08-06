import mongoose from "mongoose";

const adminSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    tourData:{
        type:Object,
        default:{}
    }
},{minimize:false})

const userModel=mongoose.models.admin || mongoose.model('admin',adminSchema);
export default userModel;