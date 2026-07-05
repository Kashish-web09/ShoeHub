
import express from 'express';
import feedbackController from './feedbackController.js';
const feedbackRoutes=express.Router();
const FeedbackController=new feedbackController();

feedbackRoutes.get('/',(req,res,next)=>{
    FeedbackController.getFeedbackPage(req,res,next)
})
feedbackRoutes.post('/update-status/:id',(req,res,next)=>{
    FeedbackController.updateStatus(req,res,next)
})
export default feedbackRoutes;