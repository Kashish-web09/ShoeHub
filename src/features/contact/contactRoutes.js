import express from 'express';
import contactController from './contactController.js';
import { contactRules } from './contactValidation.js';
import { validate } from '../../middlewares/validationMiddleware.js';
const contactRoute=express.Router();
const ContactController=new contactController();

contactRoute.get('/',(req,res,next)=>{
    ContactController.showcontactPage(req,res,next)
})

contactRoute.post('/',validate(contactRules,"contact"),(req,res,next)=>{
    ContactController.submitContactForm(req,res,next)
})

export default contactRoute;