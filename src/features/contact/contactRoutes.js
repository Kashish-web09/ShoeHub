import express from 'express';
import contactController from './contactController.js';

const contactRoute=express.Router();
const ContactController=new contactController();

contactRoute.get('/',(req,res,next)=>{
    ContactController.showcontactPage(req,res,next)
})

contactRoute.post('/',(req,res,next)=>{
    ContactController.submitContactForm(req,res,next)
})

export default contactRoute;