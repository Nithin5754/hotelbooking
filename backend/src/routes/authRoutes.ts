import express from 'express'
import {authUser,logOut,validateToken} from '../controllers/authController'
import {validateLogin,loginValidationMiddleware} from '../middleware/userAuthentication'
import { verifyToken } from '../middleware/verifyTokenMiddleware'

const router=express.Router()




router.post("/login",validateLogin(),loginValidationMiddleware,authUser)
router.get('/validate-token',verifyToken,validateToken)

router.post('/logout',logOut)



export default router
