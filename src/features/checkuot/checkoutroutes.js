import express from 'express';
import checkoutController from './checkoutController.js';

const checkoutRoutes=express.Router();
const checkOutController=new checkoutController();

export default checkoutRoutes;