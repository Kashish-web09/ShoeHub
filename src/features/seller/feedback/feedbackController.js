
import feedbackRepo from "./feedbackRepository.js";
import { updateOnFeedback } from "../../../config/emailService.js";
export default class feedbackController{
    constructor(){
        this.feedbackRepo=new feedbackRepo();
    }
async getFeedbackPage(req, res, next) {
    try {
        const feedbacks = await this.feedbackRepo.getFeedback();

        res.render("seller/feedback", {
            title: "Feedbacks",
            feedbacks: feedbacks,
            name:"",
            status:""
        });

    } catch (err) {
        next(err);
    }
}
async updateStatus(req,res,next){
    try {
        const feedbackId=req.params.id;
        const status=req.body.status;
        const message=req.body.message
        const feedback=await this.feedbackRepo.getFeedbackById(feedbackId);
                console.log("Customer email:", feedback.email);

        await this.feedbackRepo.updateStatus(feedbackId,status);
        await updateOnFeedback(
            feedback.email,
            message || `Your feedback status is ${status}`
        );
                res.redirect('/api/seller/feedback')

    } catch (err) {
        next(err)
    }
}
async getFeedbackDetails(req,res,next){
    try{

        const feedback = await this.feedbackRepo.getFeedbackById(
            req.params.id
        );

        res.render("seller/feedbackDetails",{
            feedback
        });

    }catch(err){
        next(err);
    }
}
async filterFeedback(req,res,next){
    try {
        const {name="",status=""}=req.query;
        const feedbacks=await this.feedbackRepo.filterFeedback(name,status);
        return res.render("seller/feedback",{
            feedbacks,
            name,
            status
        })
    } catch (err) {
        next(err)
    }
}
}