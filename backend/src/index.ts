

import express,{Request,Response} from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from "mongoose";


const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


mongoose.connect(process.env.MONGO_CONNECTION_STRING as string);


app.get('/api/test',async(req:Request,res:Response)=>{
  res.send("testing")
})



app.listen(7001,()=>{
  console.log("server started:",'http://localhost:7001/')})