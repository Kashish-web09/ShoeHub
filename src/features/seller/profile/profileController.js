import profileRepo from "./profileRepository.js";

export default class profileController{
    constructor(){
        this.profileRepo=new profileRepo();
    }
    async getSellerProfile(req,res,next){
        try {
            return res.render("seller/profile",{
                title:"Seller Profile"
            })
        } catch (err) {
            next(err)
        }
    }
    async updateSellerProfile(req,res,next){
        try {
            const sellerId=req.sellerId;
            const data={
            name:req.body.name,
            phone:req.body.phone,
            storeName:req.body.storeName,
            businessType:req.body.businessType,
            gstNumber:req.body.gstNumber,
            address:req.body.address,
            city:req.body.city,
            state:req.body.state,
            pincode:req.body.pincode
        };
        if(req.file){
            data.profileImage=req.file.filename;
        }
           await this.profileRepo.updateSellerProfile(sellerId,data);
            res.redirect('/api/seller/profile')
        } catch (err) {
            next(err)
        }
    }
    async getUpdatePage(req,res,next){
        try {
            const sellerId=req.sellerId;
            const seller= await this.profileRepo.getSellerProfile(sellerId);
            return res.render("seller/updateProfile",{
                title:"Edit Profile",
                seller
            })
        } catch (err) {
            next(err)
        }
    }
}