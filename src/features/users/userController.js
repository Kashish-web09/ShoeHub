import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import userRepository from './userRepsitory.js'
import userModel from "./userModels.js";
import {jwtAuth} from '../../middlewares/jwtAuthMiddleware.js';
import { ApplicationError } from '../../errorFile/applicationError.js';
import { sendResetEmail,sendWelcomeEmail } from '../../config/emailService.js';
export default class userController{
    constructor() {
        this.userRepository=new userRepository();

    }

    async signUp(req,res,next){
        try {
            const {name,email,password}=req.body;
            const exisitingUser=await this.userRepository.findUser(email);
            if(exisitingUser){
                return res.render('register',{
                    error:"User already exisits"
                })
            }
            const hashpasword=await bcrypt.hash(password,12);
            const newUser=new userModel(
                name,
                email,
                hashpasword
            );
            await this.userRepository.signUp(newUser);
            await sendWelcomeEmail(newUser.email,newUser.name)
          return  res.redirect('/login');
        } catch (error) {

            next( new ApplicationError("Somthing went wrong with the database",500));
        }
    }
    
    async signInBrowser(req,res,next){

        try {
            const {email,password}=req.body;
            // check if user exist or not
            const user=await this.userRepository.findUser(email);
            if(!user){
                            return res.status(404).render('login');

            }
            // compare the hash pass wth user password
            const isMatch=await bcrypt.compare(password,user.password);
            if(!isMatch){
            return res.render('login')

            }
            const token=jwt.sign(
                {
                    userId:user._id,
                    email:user.email
                },
                process.env.JWT_SECRETKEY,
                {
                    expiresIn:'2h'
                }
            );
                    res.cookie('customerToken',token,{
                        httpOnly:true,
                        secure:false,
                        maxAge:2*24*60*60*1000
                    });
                    res.redirect('/')

        } catch (error) {

            next( new ApplicationError("Somthing went wrong with the database",500));
        }
        
    }
async signIn(req, res, next) {
    try {
        const { email, password } = req.body;

        // Find the user
        const user = await this.userRepository.findUser(email);

        if (!user) {
            return res.status(404).json({
                message: "Invalid Credentials"
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid Credentials"
            });
        }

        // Generate JWT
        const token = jwt.sign(
            {
                userId: user._id,
                email: user.email
            },
            process.env.JWT_SECRETKEY,
            {
                expiresIn: "2h"
            }
        );

        return res.status(200).send(
            token
        );

    } catch (err) {
        next(err);
    }
}
async logout(req,res,next){
res.clearCookie('customerToken');
return res.redirect('/login')
}
async forgotPass(req,res,next){
    try {
        const {email}=req.body;
        const user=await this.userRepository.forgotPass(email);
        if(!user){
            return res.status(400).send("Email not register")
        }
        const token=crypto.randomBytes(32).toString("hex");
const expiry=new Date(Date.now()+60*60*1000);
await this.userRepository.saveResettoken(email,token,expiry)
await sendResetEmail(email,token)
        return res.send("Password reset link has been sent to your email.");
    } catch (err) {
        next(err)
    }
}
async resetPass(req,res,next){
    try {
        const {token}=req.params;
        const {password}=req.body;
        const hashedPassword=await bcrypt.hash(password,12);
     const result=   await this.userRepository.resetPass(token,hashedPassword);
     if(!result){
        return res.status(400).send("Invalid or expired reset token")
     }
        res.redirect('/login')
    } catch (err) {
        next(err)
    }
}
}