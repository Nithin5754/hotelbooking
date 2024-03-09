import express from 'express'
import userController from '../controllers/users'
 import {validateUserRegister,UserRegisterValidation} from '../middleware/userRegisterValidation'

const router=express.Router()

router.post('/register',UserRegisterValidation(),validateUserRegister,userController.registerUser)


export default router