const express = require('express');

const {loginHandler, signUpHandler} = require('../controllers/authController');

const loginRouter = express.Router();
const signupRouter = express.Router();

loginRouter.route("/")
    .post(loginHandler);

signupRouter.route("/")
    .post(signUpHandler)

module.exports = { loginRouter, signupRouter };