import { validationResult } from "express-validator";

export const validate = (rules,view) => {
    return async (req, res, next) => {
        await Promise.all(rules.map(rule => rule.run(req)));

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).render(view,{
                token:req.params.token,
                errors:errors.mapped(),
            })
        }

        next(); 
    };
};