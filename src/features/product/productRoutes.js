import express from 'express';
import { upload } from '../../middlewares/fileUploadsMiddleware.js';
import  productController  from './productController.js';
const productRoutes=express.Router();
const productsController=new productController();

productRoutes.post('/',
    upload.single('image'),
    
    (req,res,next)=>{
        productsController.addProduct(req,res,next)
    }
)
productRoutes.get('/',(req,res,next)=>{
    productsController.getAll(req,res,next)
})
productRoutes.get('/filter',(req,res,next)=>{
    productsController.filterProduct(req,res,next)
})
productRoutes.get('/:id',(req,res,next)=>{
    productsController.getOne(req,res,next)
})
productRoutes.delete('/:id',(req,res,next)=>{
    productsController.deleteProducts(req,res,next)
})
productRoutes.post('/rating',(req,res,next)=>{
    productsController.rateProducts(req,res,next)
})
export default productRoutes