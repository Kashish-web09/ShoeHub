import { body } from "express-validator";


 export const addProductRule=[
    body("name").notEmpty().withMessage("Product name is required"),
    body("brand").notEmpty().withMessage("Brand name is required"),
        body("category").notEmpty().withMessage("Select the category"),
                body("gender").notEmpty().withMessage("Select the gender"),
                body("price").notEmpty().withMessage("Price is requires").isFloat({min:1}).withMessage("Price must be greater than 0"),
                body("stock").notEmpty().withMessage("Stock is required"),
body("color")
    .trim()
    .notEmpty()
    .withMessage("Color is required"),
                    body("size").notEmpty().withMessage("Size is required"),
                body("desc").notEmpty().withMessage("Description is required"),



]
