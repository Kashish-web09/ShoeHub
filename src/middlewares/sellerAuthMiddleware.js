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
        // Verify JWT
        const payload = jwt.verify(
            token,
            process.env.JWT_SECRETKEY
        );

        // Check role
        if (payload.role !== "seller") {
            return res.status(403).send("Access Denied");
        }

        // Get seller from MongoDB
        const seller = await sellerRepository.findById(payload.sellerId);

        if (!seller) {
            res.clearCookie("token");
            return res.redirect("/api/seller/login");
        }

        // Store seller info in request
        req.sellerId = seller._id;
        req.seller = seller;

        // Make data available in every EJS page
        res.locals.isLoggedIn = true;
        res.locals.seller = seller;
        res.locals.isSeller=true;
console.log("sellerAuth running");
        console.log(res.locals.seller);

        next();

    } catch (err) {
        console.log(err);

        res.clearCookie("token");
        return res.redirect("/api/seller/login");
    }
};