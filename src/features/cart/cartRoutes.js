
import express from 'express';
import cartController from './cartController.js';

const cartRoutes=express.Router();
const cartItemController=new cartController();

cartRoutes.post('/',(req,res,next)=>{
    cartItemController.addItem(req,res,next);
});
cartRoutes.get('/',(req,res,next)=>{
    cartItemController.getItem(req,res,next);
})
cartRoutes.post('/:id',(req,res,next)=>{
    cartItemController.deleteItem(req,res,next)
})
cartRoutes.post('/increase/:id',(req,res,next)=>{
    cartItemController.increaseQuantity(req,res,next)
})
cartRoutes.post('/decrease/:id',(req,res,next)=>{
    cartItemController.decreaseQuantity(req,res,next)
})

export default cartRoutes;