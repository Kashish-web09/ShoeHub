import mongoose from "mongoose";
import { ApplicationError } from "../../../errorFile/applicationError.js";
import { feedbackSchema } from "./feedbackScehma.js";

const feedbackModel=mongoose.models.feedback || mongoose.model('feedback',feedbackSchema)
export default class feedbackRepo{
        async getFeedback(){
            try {
                return await feedbackModel.find().sort({createdAt:-1});
            } catch (err) {
                throw new ApplicationError("Something wrong with db",500)
            }
        }
        async getFeedbackById(id){
    try{
    return await feedbackModel.findById(
        id
    ) 

}catch(err){
                            throw new ApplicationError("Something wrong with db",500)
    
    }
        }
        async updateStatus(feedbackId,status){
            try {
    return await feedbackModel.findOneAndUpdate(
        {_id:feedbackId},{
            $set:{
                status:status
            }
        },
        {
            returnDocument:"after",
            runValidators:true
        }
    )
    
            } catch (err) {
                            throw new ApplicationError("Something wrong with db",500)
    
            }
        }
        async filterFeedback(name,status){
            try {
              
                let query={};
                if(name){
                    query.name={
                        $regex:name,
                        $options:"i"
                    }
                }  
                if(status){
                    query.status=status
                }
                return await feedbackModel.find(query).sort({createdAt:-1});
            } catch (err) {
                                        throw new ApplicationError("Something wrong with db",500)
    
            }
        }
}
