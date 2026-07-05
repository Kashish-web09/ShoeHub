import { body,validationResult } from "express-validator";

export const validationProductRequest=async(req,res,next)=>{
const rules=[
    body('name').notEmpty().withMessage("Name is required"),
    body('price').isFloat().withMessage('Price is required'),
    body('category').notEmpty().withMessage("Category is required")
];
await Promise.all(
    rules.map(r=>r.run(req))
);
const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({
        success:false,
        errors:errors.array()
    })
}
next();
}