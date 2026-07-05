import express from "express";
import orderController from "./orderController.js";

const orderRoutes = express.Router();

const OrderController = new orderController();

orderRoutes.post("/place",(req,res,next)=>{
    OrderController.placeOrder(req,res,next);
});

orderRoutes.get("/",(req,res,next)=>{
    OrderController.getOrders(req,res,next);
});
orderRoutes.get('/checkout',(req,res,next)=>{
    OrderController.checkoutPage(req,res,next)
})
orderRoutes.get('/:id',(req,res,next)=>{
    OrderController.getOrder(req,res,next)
})
// Cancel Order
orderRoutes.delete("/:id/cancel",(req,res,next)=>{
    OrderController.cancelOrder(req,res,next);
});

// Admin
orderRoutes.get("/admin/all",(req,res,next)=>{
    OrderController.getAllOrders(req,res,next);
});

// Admin Update Status
orderRoutes.post("/admin/:id",(req,res,next)=>{
    OrderController.updateOrder(req,res,next);
});
export default orderRoutes;