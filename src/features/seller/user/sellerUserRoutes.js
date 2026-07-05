import express from "express";
import sellerUserController from "./sellerUserController.js";
import { sellerAuth } from "../../../middlewares/sellerAuthMiddleware.js";
import { upload } from "../../../middlewares/fileUploadsMiddleware.js";

const sellerUserRoutes = express.Router();
const SellerController = new sellerUserController();



sellerUserRoutes.get("/login", (req, res, next) => {
    SellerController.getLogin(req, res, next);
});
sellerUserRoutes.get('/register',(req,res,next)=>{
    SellerController.getRegister(req,res,next)
})

sellerUserRoutes.post("/login", (req, res, next) => {
    SellerController.postLogin(req, res, next);
});
sellerUserRoutes.post('/register',upload.single("profileImage"),(req,res,next)=>{
    SellerController.postRegister(req,res,next)
})

sellerUserRoutes.get('/logout',(req,res,next)=>{
    SellerController.logout(req,res,next)
})
sellerUserRoutes.get(
    "/dashboard",
    sellerAuth,
    (req, res, next) => {
        SellerController.getDashboard(req, res, next);
    }
);



export default sellerUserRoutes;