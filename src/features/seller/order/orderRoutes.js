import express from 'express';
import sellerOrderController from './orderController.js';

const sellerOrderroutes=express.Router()
const sellerorderController=new sellerOrderController();

sellerOrderroutes.get('/',(req,res,next)=>{
    sellerorderController.getOrders(req,res,next)
});
sellerOrderroutes.get('/filter',(req,res,next)=>{
    sellerorderController.filterOrder(req,res,next)
})

sellerOrderroutes.get('/:id',(req,res,next)=>{
    sellerorderController.getOrderDetails(req,res,next)
})
sellerOrderroutes.post('/:id/status',(req,res,next)=>{
    sellerorderController.updateOrderStatus(req,res,next)
})
export default sellerOrderroutes;