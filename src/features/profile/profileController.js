import profileRepo from "./profileRepository.js";


export default class profileController{
    constructor(){
        this.profileRepo=new profileRepo();
    }
    async getUserProfilePage(req,res,next){
try{
    const userId=req.userId;
    const user=await this.profileRepo.getUserProfile(userId);
    return res.render("userProfile",{
    title:"User Profile Page",
    user
})
}catch(err){
    next(err)
}
    }
    async updateProfile(req,res,next){
try{
    const userId=req.userId;
const data={
   name: req.body.name,
email:req.body.email,

}
if(req.file){
    data.image=req.file.filename
}
await this.profileRepo.updateUserProfile(userId,data);
 res.redirect('/api/profile')
}catch(err){
    next(err)
}
    }
    async getUpdatePage(req,res,next){
try{
            const userId=req.userId;
        const user=await this.profileRepo.getUserProfile(userId);
return res.render("updateProfile",{
    title:"Update Profile",
user
})
}catch(err){
    next(err)
}
    }
}