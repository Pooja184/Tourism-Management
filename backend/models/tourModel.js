import mongoose from 'mongoose';

const addTourSchema= new mongoose.Schema({
     adminId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "admin", // Reference to the Admin collection
        required: true
    },
    tourName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    date:{
        type:Number,
        required:true
    }
})
const addTourModel=mongoose.models.addTour||mongoose.model("addTour",addTourSchema);
export default addTourModel