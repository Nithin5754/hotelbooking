import { Request, Response } from "express";
import cloudinary from 'cloudinary'
import Hotel, { HotelType } from "../models/hotel";




const createNewHotels=async (req:Request,res:Response) => {

   try {
    const imagesFiles=req.files as Express.Multer.File[];
    const newHotel:HotelType=req.body;


    

    //step 1--- upload img to cloudinary

    const uploadPromises=imagesFiles.map(async(image)=>{
        const b64=Buffer.from(image.buffer).toString('base64')
        let dataURI="data:"+image.mimetype+";base64,"+b64
        const res=await cloudinary.v2.uploader.upload(dataURI)

        return res.url
    })
    //step 2 ----  if upload sucessfull add that url to newHotel
     const imageUrls=await Promise.all(uploadPromises);
     newHotel.imageUrls=imageUrls;
     newHotel.lastUpdated=new Date();
     newHotel.userId=req.userId;

     //step-3 save new hotel in our database
     const hotel=new Hotel(newHotel)

     //step-4 return 201 status back
     await hotel.save()
     res.status(201).send(hotel)
     
   } catch (error) {
    console.log("Error creating hotels",error);

    res.status(500).json({message:"something went wrong"})
    
   }

}



export {createNewHotels}