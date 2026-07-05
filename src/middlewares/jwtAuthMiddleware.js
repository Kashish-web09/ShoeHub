import jwt from 'jsonwebtoken';
export const jwtAuth=(req,res,next)=>{
    const authHeader=req.headers['authorization'];
    if(!authHeader){
        return res.status(401).send("Unauthorized")
    }
    const token=authHeader.split(' ')[1];
    try {
        const payload=jwt.verify(
            token,
            process.env.JWT_SECRETKEY
        );
        req.userId=payload.userId;
        next()
    } catch (error) {
        return res.status(401).send("Unauthorized");
    }
}
export const setAuthUser=(req,res,next)=>{

    const token=req.cookies.customerToken;
    if(!token){
        res.locals.isLoggedIn=false;
        return next();
    }
    try {
        const payload=jwt.verify(
            token,
            process.env.JWT_SECRETKEY
        );

        req.userId=payload.userId;
        res.locals.isLoggedIn=true;
        res.locals.email=payload.email;
        next();
    } catch (error) {
        console.log(error)
        return res.status(401).send("Unauthorized");
    }
}
