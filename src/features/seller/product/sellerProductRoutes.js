import express from 'express';
import SellerProductController from './sellerProductController.js';
import { upload } from '../../../middlewares/fileUploadsMiddleware.js';

const sellerProductroutes=express.Router();
const sellerController=new SellerProductController();

sellerProductroutes.get('/',(req,res,next)=>{
    sellerController.getProducts(req,res,next)
})
sellerProductroutes.get('/add-product',(req,res,next)=>{
    sellerController.getAddProductPage(req,res,next);
})
sellerProductroutes.post('/add-product',upload.array("images",5)
    ,(req,res,next)=>{
sellerController.add(req,res,next)
})
sellerProductroutes.get('/edit/:id',(req,res,next)=>{
    sellerController.getEditPage(req,res,next);
})
sellerProductroutes.post('/edit/:id',upload.single('images'),(req,res,next)=>{
    sellerController.updateProduct(req,res,next);
})
sellerProductroutes.get('/delete/:id',(req,res,next)=>{
    sellerController.deleteProduct(req,res,next);
})
sellerProductroutes.get('/out-of-stock-product',(req,res,next)=>{
    sellerController.getOutOfStock(req,res,next)
})
export default sellerProductroutes;