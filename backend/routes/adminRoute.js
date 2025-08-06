import express from 'express';
import { adminLogin, adminRegister } from '../controllers/adminController.js';

const adminRouter=express.Router();

adminRouter.post('/admin-register',adminRegister);
adminRouter.post('/admin-login',adminLogin);


export default adminRouter;

