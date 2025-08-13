import express from "express";
import upload from "../middlewares/multer.js"; // Import Multer middleware for image upload handling
import adminAuth from "../middlewares/adminAuth.js";
import { addTour } from "../controllers/admin/tourController.js";

const tourRouter=express.Router();

tourRouter.post("/add",adminAuth,upload.single('image'),addTour)

export default tourRouter;