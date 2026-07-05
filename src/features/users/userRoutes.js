import express from 'express';
import userController from './userController.js';

const userRoutes = express.Router();

const usersController = new userController();

userRoutes.post('/register', (req, res, next) => {
    usersController.signUp(req, res, next);
});

userRoutes.post('/login', (req, res, next) => {
    usersController.signIn(req, res, next);
});

userRoutes.post('/login-browser', (req, res, next) => {
    usersController.signInBrowser(req, res, next);
});

userRoutes.post('/resetPass/:token', (req, res, next) => {
    usersController.resetPass(req, res, next);
});
userRoutes.get('/resetPass/:token', (req, res) => {
    res.render('resetPass', {
        token: req.params.token
    });
});
userRoutes.get('/logout', (req, res, next) => {
    usersController.logout(req, res, next);
});

userRoutes.get('/forgotPass', (req, res) => {
    res.render('forgotPass');
});

userRoutes.post('/forgotPass', (req, res, next) => {
    usersController.forgotPass(req, res, next);
});

export default userRoutes;