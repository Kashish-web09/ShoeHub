import mongoose from "mongoose";
import { feedbackSchema } from "../seller/feedback/feedbackScehma.js";
import { ApplicationError } from "../../errorFile/applicationError.js";

const contactModel= mongoose.models.feedback ||  mongoose.model('feedback',feedbackSchema);

export default class contactRepository{
        async submitContactForm(feedback){
                    try {
const newFeedbak=new contactModel(feedback);
await newFeedbak.save();
return newFeedbak;
            } catch (err) {
                throw new ApplicationError("Something went wrong with db",500)
            }
    
        }
    
}