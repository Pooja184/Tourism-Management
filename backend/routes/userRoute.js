import express from 'express';
import { userRegister } from '../controllers/userController.js';


const userRouter=express.Router();

userRouter.post('/user-register',userRegister);

export default userRouter;