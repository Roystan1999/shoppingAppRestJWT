const express = require('express')

const UserRouter=express.Router();

const userController =require('../controller/users')
const auth=require("../middleware/auth")

//registration 

UserRouter.post('/registration',userController.register)

//login

UserRouter.post('/login',userController.login)

module.exports = UserRouter