import express from "express";
import upload from "../middlewares/multer.js"; // Import Multer middleware for image upload handling
import adminAuth from "../middlewares/adminAuth.js";
import { addTour, getAllTours, listTours } from "../controllers/admin/tourController.js";

const tourRouter=express.Router();

//admin
tourRouter.post("/add",adminAuth,upload.single('image'),addTour);
tourRouter.get("/list",adminAuth,listTours);

// user
tourRouter.get("/alltours",getAllTours)
export default tourRouter;