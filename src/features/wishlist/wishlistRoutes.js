import express from 'express';
import wishcontroller from "./wishlistController.js";

const wishroutes=express.Router();
const WishController=new wishcontroller();

wishroutes.post('/',(req,res,next)=>{
    WishController.addItem(req,res,next)
})
wishroutes.get('/',(req,res,next)=>{
    WishController.getItem(req,res,next)
})
wishroutes.post('/delete/:id',(req,res,next)=>{
    WishController.deleteItem(req,res,next)
})


export default wishroutes;