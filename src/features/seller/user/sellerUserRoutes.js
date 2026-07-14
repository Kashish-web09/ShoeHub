import express from "express";
import sellerUserController from "./sellerUserController.js";
import { sellerAuth } from "../../../middlewares/sellerAuthMiddleware.js";
import { upload } from "../../../middlewares/fileUploadsMiddleware.js";
import { validate } from "../../../middlewares/validationMiddleware.js";
import { forgotPassRules, loginRules, registerRule, resetPassRules } from "./sellerUserValidation.js";

const sellerUserRoutes = express.Router();

const SellerController = new sellerUserController();


// ==========================
// Seller Authentication
// ==========================

// Login Page
sellerUserRoutes.get("/login", (req, res, next) => {
    SellerController.getLogin(req, res, next);
});


// Register Page
sellerUserRoutes.get("/register", (req, res, next) => {
    SellerController.getRegister(req, res, next);
});


// Login Submit
sellerUserRoutes.post("/login",validate(loginRules,"seller/login"), (req, res, next) => {
    SellerController.postLogin(req, res, next);
});


// Register Submit
sellerUserRoutes.post(
    "/register",
        upload.single("profileImage"),

    validate(registerRule,"seller/register"),
    (req, res, next) => {
        SellerController.postRegister(req, res, next);
    }
);


// Logout
sellerUserRoutes.get("/logout", (req, res, next) => {
    SellerController.logout(req, res, next);
});



// ==========================
// Forgot Password
// ==========================


// Seller Forgot Password Page
sellerUserRoutes.get("/forgotPass", (req, res) => {
    res.render("seller/forgotPass", {
        errors: {}
    });
});

// Send Reset Email
sellerUserRoutes.post("/forgotPass",validate(forgotPassRules,"seller/forgotPass"), (req, res, next) => {
    SellerController.forgotPass(req, res, next);
});



// ==========================
// Reset Password
// ==========================


// Seller Reset Password Page
sellerUserRoutes.get("/resetPass/:token", (req, res) => {

    res.render("seller/resetPass", {
        token: req.params.token,
        errors: {}
    });

});

// Update Password
sellerUserRoutes.post("/resetPass/:token",validate(resetPassRules,"seller/resetPass"), (req, res, next) => {
    SellerController.resetPass(req, res, next);
});



// ==========================
// Seller Dashboard
// ==========================

sellerUserRoutes.get(
    "/dashboard",
    sellerAuth,
    (req, res, next) => {
        SellerController.getDashboard(req, res, next);
    }
);



export default sellerUserRoutes;