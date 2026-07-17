import contactRepository from "./contactRepository.js"
import contactModels from "./contactModels.js"
import { sendFeedbackThankyou } from "../../config/emailService.js";

export default class contactController{
    constructor(){
this.contactRepository=new contactRepository();
    }
 async   showcontactPage(req,res,next){
try {
    res.render("contact",{
        title:"Contact Page",
        errors:{}
    })
} catch (err) {
    next(err)
}
    }
  async  submitContactForm(req,res,next){
        try {
    const {name,email,message}=req.body;
    const contact=new contactModels(
        name,
        email,
        message    
    );
    await this.contactRepository.submitContactForm(contact);
    res.redirect("/api/contact");
        // await sendFeedbackThankyou(contact.email,contact.name)

} catch (err) {
    next(err)
}

    }
}