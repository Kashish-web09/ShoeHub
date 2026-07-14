import express from 'express';
import userController from './userController.js';
import { validate } from '../../middlewares/validationMiddleware.js';
import { forgotPassRules, loginRules, registerRule, resetPassRules } from './userValidation.js';

const userRoutes = express.Router();

const usersController = new userController();

userRoutes.post('/register',validate(registerRule,"register"), (req, res, next) => {
    usersController.signUp(req, res, next);
});

userRoutes.post('/login',validate(loginRules,"login"), (req, res, next) => {
    usersController.signIn(req, res, next);
});

userRoutes.post('/login-browser',validate(loginRules,"login") ,(req, res, next) => {
    usersController.signInBrowser(req, res, next);
});

userRoutes.post('/resetPass/:token',validate(resetPassRules,"resetPass"), (req, res, next) => {
    usersController.resetPass(req, res, next);
});
userRoutes.get('/resetPass/:token', (req, res) => {
    res.render('resetPass', {
        token: req.params.token,
        errors:{}
    });
});
userRoutes.get('/logout', (req, res, next) => {
    usersController.logout(req, res, next);
});

userRoutes.get('/forgotPass', (req, res) => {
    res.render('forgotPass',{
        errors:{}
    });
});

userRoutes.post('/forgotPass',validate(forgotPassRules,"forgotPass"), (req, res, next) => {
    usersController.forgotPass(req, res, next);
});

export default userRoutes;