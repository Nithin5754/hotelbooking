import express from 'express'
import { createNewHotels } from '../controllers/my-hotelController';

import multer from 'multer'
import { verifyToken } from '../middleware/verifyTokenMiddleware';
import { hotelValidationRules, hotelValidationRulesMiddleware } from '../middleware/my-hotel-validation';


const router=express.Router();

const storage=multer.memoryStorage()


const upload=multer({
  storage:storage,
  limits:{
    fileSize:15*1024*1024 // it must be limited to 15mb

  }
})

//api/my-hotels

router.post('/',verifyToken,hotelValidationRules(),upload.array("imageFiles",6),createNewHotels);





export default router