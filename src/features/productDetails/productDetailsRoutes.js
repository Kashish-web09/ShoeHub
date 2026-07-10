import express from 'express';
import productDetailController from './productDetailsController.js';

const productDetailsRoute=express.Router();
const productController=new productDetailController();

productDetailsRoute.get("/details/:id",
    (req,res,next)=>{
        productController.getProductById(req,res,next)
    }
)
export default productDetailsRoute;
