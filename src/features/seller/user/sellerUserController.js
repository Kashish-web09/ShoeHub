import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import sellerUserRepository from './sellerUserRepository.js';
import { sellerAuth } from '../../../middlewares/sellerAuthMiddleware.js';
import sellerUserModels from './sellerUserModels.js'

export default class sellerUserController {
    constructor() {
    this.sellerUserRepository=new sellerUserRepository();
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
    maxAge:2*24*60*60*1000
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
                return res.render('/api/seller/register',{
                    error:"User already exisits"
                })
            }    
            
            const hashedPassword=await bcrypt.hash(password,12);
               const newSeller=new sellerUserModels(name,email,phone,hashedPassword,storeName,address,state,city,pincode,gstNumber,profileImage);
         await this.sellerUserRepository.register(newSeller);
         return res.redirect('/api/seller/login')
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

    // ==========================
    // Dashboard
    // ==========================

    async getDashboard(req, res, next) {
        try {
res.render("seller/dashboard", {
    title: "Seller Dashboard",
    totalUsers: 0,
    totalProducts: 0,
    totalOrders: 0,
    revenue: 0,
    recentOrders: []
});        } catch (err) {
            next(err);
        }
    }



}