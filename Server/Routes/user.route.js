const express = require('express')

const route = express.Router()

const userController = require('../Contollers/user.controller')

route.post('/signUp' , userController.signup )
route.post('/SignIn' , userController.signin)

module.exports = route