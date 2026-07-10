import express from 'express';
import profileController from './profileController.js';
import { upload } from '../../../middlewares/fileUploadsMiddleware.js';

const profileRoute=express.Router();
const profilesController=new profileController();

profileRoute.get('/',(req,res,next)=>{
    profilesController.getSellerProfile(req,res,next)
})
profileRoute.get('/update',(req,res,next)=>{
    profilesController.getUpdatePage(req,res,next)
})
profileRoute.post('/update',upload.single('profileImage'), (req,res,next)=>{
    profilesController.updateSellerProfile(req,res,next)
})
export default profileRoute;