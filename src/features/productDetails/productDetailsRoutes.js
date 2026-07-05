import express from 'express';
import productDetailController from './productDetailsController.js';

const productDetailsRoute=express.Router();
const productController=new productDetailController();

productDetailsRoute.get("/", (req, res, next) => {
    productController.getAllProducts(req, res, next);
});

// Product Details
productDetailsRoute.get("/:id", (req, res, next) => {
    productController.getProductDetails(req, res, next);
});

// Category
productDetailsRoute.get("/category/:category", (req, res, next) => {
    productController.getProductsByCategory(req, res, next);
});

// Search
productDetailsRoute.get("/search", (req, res, next) => {
    productController.searchProducts(req, res, next);
});

// Filter
productDetailsRoute.get("/filter", (req, res, next) => {
    productController.filterProducts(req, res, next);
});
export default productDetailsRoute;
