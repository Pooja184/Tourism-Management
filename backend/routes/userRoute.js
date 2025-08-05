import express from 'express';
import { userLogiin, userRegister } from '../controllers/userController.js';


const userRouter=express.Router();

userRouter.post('/user-register',userRegister);
userRouter.post('/user-login',userLogiin);


export default userRouter;