import { body } from "express-validator";

export const registerRule = [
    body("profileImage")
    .custom((value,{req})=>{
        if(!req.file){
            throw new Error("Profile image is required");
        }
        return true;
    }),
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required"),

    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Enter a valid email"),
body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required")
    .bail()
    .isMobilePhone("en-IN")
    .withMessage("Enter a valid mobile number")
    .bail()
    .isLength({ min:10, max:10 })
    .withMessage("Enter a valid 10 digit mobile number"),
    body("password")
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long"),
        body("confirmPassword")
                .trim()
        .notEmpty()
        .withMessage(" Confirm Password is required")
        .bail()
        .custom((value,{req})=>{
            if(value!==req.body.password){
throw new Error("Password does not match")
            }
            return true
        })

        ,
    body("storeName")
    .trim()
        .notEmpty()
        .withMessage("Store name is required"),
        
        body("address")
    .trim()
        .notEmpty()
        .withMessage("Address is required"),
               
        body("city")
    .trim()
        .notEmpty()
        .withMessage("City is required"),
        
              body("state")
    .trim()
        .notEmpty()
        .withMessage("State is required"),
              body("pincode")
    .trim()
        .notEmpty()
        .withMessage("Pincode is required"),
        

    ];

export const loginRules=[
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Enter a valid email"),

    body("password")
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 8 })
        .withMessage("Incorrrect Password")
]
export const forgotPassRules=[
        body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Enter a valid email"),

]
export const resetPassRules=[
        body("password")
        .trim()
        .notEmpty()
        .withMessage("Password is required")
        .bail()
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long"),
        body("confirmPassword")
                .trim()
        .notEmpty()
        .withMessage(" Confirm Password is required")
        .bail()
        .custom((value,{req})=>{
            if(value!==req.body.password){
                throw new Error("Passwrod do not match")
            }
            return true
        })


]