import express from 'express';
import profileController from './profileController.js';
import { upload } from '../../middlewares/fileUploadsMiddleware.js';
const userProfileRoute=express.Router();
const profilesController=new profileController();

userProfileRoute.get('/',(req,res,next)=>{
    profilesController.getUserProfilePage(req,res,next)
})
userProfileRoute.get('/update',(req,res,next)=>{
    profilesController.getUpdatePage(req,res,next)
})
userProfileRoute.post('/update',upload.single("image"),(req,res,next)=>{
    profilesController.updateProfile(req,res,next)
})
export default userProfileRoute;