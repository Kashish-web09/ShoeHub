
import ejs from 'ejs';
import express from 'express';
import swagger from 'swagger-ui-express';
import expressEjsLayouts from 'express-ejs-layouts';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { connectDb } from './config/mongoDb.js';
import apiDocs from '../swagger.json' with {type:'json'};
import { jwtAuth,setAuthUser } from './middlewares/jwtAuthMiddleware.js';
import {ApplicationError} from './errorFile/applicationError.js'
import userRoutes from './features/users/userRoutes.js';
import productRoutes from './features/product/productRoutes.js';
import userController from './features/users/userController.js';
import cartRoutes from './features/cart/cartRoutes.js';
import cartController from './features/cart/cartController.js';
import wishroutes from './features/wishlist/wishlistRoutes.js';
import orderRoutes from './features/order/orderRoutes.js';
import checkoutRoutes from './features/checkuot/checkoutroutes.js';
import contactRoute from './features/contact/contactRoutes.js';
import sellerUserRoutes from './features/seller/user/sellerUserRoutes.js'
import productController from './features/product/productController.js';
import productDetailsRoute from './features/productDetails/productDetailsRoutes.js';
import { sellerAuth } from './middlewares/sellerAuthMiddleware.js';
import sellerProductroutes from './features/seller/product/sellerProductRoutes.js';
import feedbackRoutes from './features/seller/feedback/feedbackRoutes.js';
const cartItemController=new cartController();
const productsController=new productController();
const usersController = new userController();


const app=express();

let corsOptions ={
    origin:'http://127.0.0.1:5500'
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(setAuthUser);

app.set('view engine','ejs');
app.set('views','./src/views');

app.use(expressEjsLayouts);
app.set('layout',"layouts/layout")

app.use(express.static('./src/public'));
app.use('/uploads',express.static("uploads"))
app.use((req,res,next)=>{
res.locals.title="ShoeHub";
next();
});
app.use((req,res,next)=>{
    res.locals.isSeller=false
next();
})
app.use('/api/users',userRoutes);
app.use('/api/products',setAuthUser,productRoutes)
app.use('/api/cart',setAuthUser,cartRoutes)
app.use('/api/wishlist',setAuthUser,wishroutes);
app.use('/api/orders',setAuthUser,orderRoutes);
// app.use('/api/checkout',setAuthUser,checkoutRoutes)
app.use('/api/contact',setAuthUser,contactRoute)
app.use('/api/seller',sellerUserRoutes);
app.use('/api/product_details',productDetailsRoute)
app.use('/api/seller/product',sellerAuth,sellerProductroutes)
app.use('/api/seller/feedback',sellerAuth,feedbackRoutes)
app.use('/api-docs',swagger.serve,swagger.setup(apiDocs));


app.get('/',(req,res,next)=>{
    productsController.home(req,res,next)
})

app.get('/register',(req,res)=>{
    res.render('register',{
        title:'Register'
    });
});
app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('/cart', (req, res, next) => {
    cartItemController.getItem(req, res, next);
});
app.get('/wishlist',(req,res)=>{
    res.render('wishlist')
})
app.get('/orders',(req,res)=>{
    res.render('orders')
})
app.get('/aboutus',(req,res)=>{
    res.render('aboutus')
})
export default app;