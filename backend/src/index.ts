

import express,{Request,Response} from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from "mongoose";
import cookieParser from 'cookie-parser'

import createUserRoutes from './routes/usersRoutes'
import authUserRoutes from './routes/authRoutes'
import myHotelRoutes from './routes/my-hotelRoutes'
import path from 'path';

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
})

mongoose.connect(process.env.MONGO_CONNECTION_STRING as string);
const app=express()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
  origin:process.env.FRONTEND_URL,
  credentials:true
}))






app.use(express.static(path.join(__dirname,'../../frontend/dist')))

app.use("/api/auth",authUserRoutes)
app.use("/api/users",createUserRoutes)
app.use("/api/myHotels",myHotelRoutes)

app.get('*',(req:Request,res:Response)=>{
  res.sendFile(path.join(__dirname,'../../frontend/dist/index.html'))
})


app.listen(4000,()=>{
  console.log("server started:",'http://localhost:4000/')})