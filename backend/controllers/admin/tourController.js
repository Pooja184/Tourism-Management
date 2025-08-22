import {v2 as cloudinary} from 'cloudinary';
import addTourModel from '../../models/tourModel.js';

const addTour=async(req,res)=>{
    try {
        const {tourName,description,price,date}=req.body;
        const image =req.file;
        const adminId=req.adminId;
        console.log(adminId)
        if(!image){
           return  res.json({success:false,message:"Image is required"})
        }

        const uploadedImage=await cloudinary.uploader.upload(image.path,{folder:"tours"});

        const newTour={
            adminId,
            tourName,
            description,
            price,
            image:uploadedImage.secure_url,
            date : Date.now()
        }

        const tour=new addTourModel(newTour);
        await tour.save();
        res.json({success:true,message:"Tour added"})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

const listTours=async (req,res)=>{
    try {
        const adminId=req.adminId;
        const tours=await addTourModel.find({adminId});
        res.json({success:true,tours})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export {addTour,listTours} 