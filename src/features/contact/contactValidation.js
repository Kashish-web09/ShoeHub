import { body } from "express-validator";



export const contactRules=[
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").trim().notEmpty().withMessage("Email is required").isEmail("Enter a valid email"),
    body("message").trim().notEmpty().withMessage("Message is required").isLength({min:10,max:500})
]