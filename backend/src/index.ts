

import express,{Request,Response} from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from "mongoose";
import cookieParser from 'cookie-parser'

import createUserRoutes from './routes/usersRoutes'
import authUserRoutes from './routes/authRoutes'


const app=express()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
  origin:process.env.FRONTEND_URL,
  credentials:true
}))




mongoose.connect(process.env.MONGO_CONNECTION_STRING as string);


app.use("/api/auth",authUserRoutes)
app.use("/api/users",createUserRoutes)


app.listen(4000,()=>{
  console.log("server started:",'http://localhost:4000/')})