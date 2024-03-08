import express from 'express'
import userController from '../controllers/users'
 import {validateUserRegister,UserRegisterValidation} from '../utlis/userRegisterValidation'

const router=express.Router()

router.post('/register',UserRegisterValidation(),validateUserRegister,userController.registerUser)


export default router