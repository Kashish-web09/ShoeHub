import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto'
import sellerUserRepository from './sellerUserRepository.js';
import { sellerAuth } from '../../../middlewares/sellerAuthMiddleware.js';
import sellerUserModels from './sellerUserModels.js'
import sellerOrderRepo from '../order/orderRepository.js';
import userRepository from '../../users/userRepsitory.js';
import SellerProductRepo from '../product/sellerProductRepository.js';
import { sendSellerResetEmail, sendWelcomeEmail } from '../../../config/emailService.js';
import { title } from 'process';
export default class sellerUserController {
    constructor() {
    this.sellerUserRepository=new sellerUserRepository();
    this.sellerOrderRepo=new sellerOrderRepo();
    this.userRepository=new userRepository();
    this.SellerProductRepo=new SellerProductRepo()
    }

    // ==========================
    // Authentication
    // ==========================

    async getLogin(req, res, next) {
        try {
          res.render('seller/login',{
            title:"Seller Login",
            error:null
          })
        } catch (err) {
            next(err);
        }
    }
async getRegister(req,res,next){
    try {
        res.render('seller/register',{
            title:"Seller Register",
            error:"User already exists"
        })
    } catch (err) {
        next(err)
    }
}
    async postLogin(req, res, next) {
        try {
const {email,password}=req.body;
const seller=await this.sellerUserRepository.findUser(email);

 if (!seller) {
            return res.render("seller/login", {
                title: "Seller Login",
                error: "Seller not found"
            });
        }
        const isMatch=await bcrypt.compare(password,seller.password);

 if (!isMatch) {
            return res.render("seller/login", {
                title: "Seller Login",
                error: "Invalid password"
            });
        }
        const token=jwt.sign(
    {
    sellerId:seller._id,
    email:seller.email,
    role:"seller"
},
process.env.JWT_SECRETKEY,
{
    expiresIn:'2h'
}
);
res.cookie('sellerToken',token,{
    httpOnly:true,
    secure:false,
    maxAge:2*60*60*1000
});
res.redirect('/api/seller/dashboard')
} catch (err) {
            next(err);
        }
    }
async postRegister(req,res,next){
    try {
const profileImage=req.file ? req.file.filename : "default.png";
        const {
            name,
        email,
        phone,
        password,
        storeName,
        address,
        city,
        state,
        pincode,
        gstNumber,
        }=req.body;
const exisitingSeller=await this.sellerUserRepository.findUser(email);
if(exisitingSeller){
                return res.render('seller/register',{
                    title:"Seller Register",
                    error:"User already exisits"
                })
            }    
            
            const hashedPassword=await bcrypt.hash(password,12);
               const newSeller=new sellerUserModels(name,email,phone,hashedPassword,storeName,address,state,city,pincode,gstNumber,profileImage);
         await this.sellerUserRepository.register(newSeller);
         await sendWelcomeEmail(newSeller.email,newSeller.name)
          res.redirect('/api/seller/login')
    } catch (err) {
        next(err)
    }
}
    async logout(req, res, next) {
        try {
res.clearCookie('sellerToken');
res.redirect('/api/seller/login')

        } catch (err) {
            next(err);
        }
    }
async forgotPass(req,res,next){
    try {
        const {email}=req.body;
        const seller=await this.sellerUserRepository.forgotPass(email);
        if(!seller){
            return res.status(400).send("Email not register")
        }
        const token=crypto.randomBytes(32).toString("hex");
        const expiry=new Date(Date.now()+60*60*1000);
        await this.sellerUserRepository.saveResetPass(email,token,expiry)
        await sendSellerResetEmail(email,token);
                return res.send("Password reset link has been sent to your email.");

    } catch (err) {
        next(err)
    }
}
async resetPass(req, res, next) {
    try {

        const { token } = req.params;
        const { password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await this.sellerUserRepository.resetPass(
            token,
            hashedPassword
        );

        if (result.matchedCount === 0) {
            return res.status(400).send("Invalid or expired reset token");
        }

        res.redirect("/api/seller/login");

    } catch (err) {
        next(err);
    }
}    // ==========================
    // Dashboard
    // ==========================

    async getDashboard(req, res, next) {
        try {
            const sellerId=req.sellerId
            const orders=await this.sellerOrderRepo.getSellerOrders();
            const userCount=await this.userRepository.getAllUsers();
            const product=await this.SellerProductRepo.getAllProducts(sellerId);
            const revenue=await this.sellerOrderRepo.getRevenue();
            const recentOrder=await this.sellerOrderRepo.getRecentOrders();
res.render("seller/dashboard", {
    title: "Seller Dashboard",
    totalUsers: userCount.length,
    totalProducts:product.length,
    totalOrders:orders.length,
    revenue: revenue,
    recentOrders: recentOrder
});        } catch (err) {
            next(err);
        }
    }


}