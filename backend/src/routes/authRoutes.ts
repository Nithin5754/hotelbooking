import express from 'express'
import {authUser} from '../controllers/authController'
import {validateLogin,loginValidationMiddleware} from '../utlis/userAuthentication'

const router=express.Router()




router.post("/login",validateLogin(),loginValidationMiddleware,authUser)



export default router
