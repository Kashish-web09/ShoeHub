import jwt from "jsonwebtoken";
import sellerUserRepository from "../features/seller/user/sellerUserRepository.js";

const sellerRepository = new sellerUserRepository();

export const sellerAuth = async (req, res, next) => {
    const token = req.cookies.sellerToken;


    // No token
    if (!token) {
        res.locals.isLoggedIn = false;
        return res.redirect("/api/seller/login");
    }

    try {
        const payload = jwt.verify(
            token,
            process.env.JWT_SECRETKEY
        );


        // Check role
        if (payload.role !== "seller") {
            return res.status(403).send("Access Denied");
        }

        // Find seller
        const seller = await sellerRepository.findById(payload.sellerId);


        if (!seller) {
            res.clearCookie("sellerToken");
            return res.redirect("/api/seller/login");
        }

        req.sellerId = seller._id;
        req.seller = seller;

        res.locals.isLoggedIn = true;
        res.locals.seller = seller;
        res.locals.isSeller = true;

        next();

    } catch (err) {


        res.clearCookie("sellerToken");
        return res.redirect("/api/seller/login");
    }
};