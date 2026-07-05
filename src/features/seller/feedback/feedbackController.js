
import feedbackRepo from "./feedbackRepository.js";

export default class feedbackController{
    constructor(){
        this.feedbackRepo=new feedbackRepo();
    }
async getFeedbackPage(req, res, next) {
    try {
        const feedbacks = await this.feedbackRepo.getFeedback();

        res.render("seller/feedback", {
            title: "Feedbacks",
            feedbacks: feedbacks
        });

    } catch (err) {
        next(err);
    }
}
async updateStatus(req,res,next){
    try {
        const feedbackId=req.params.id;
        const status=req.body.status;
        await this.feedbackRepo.updateStatus(feedbackId,status);
        res.redirect('/api/seller/feedback')
    } catch (err) {
        next(err)
    }
}
}