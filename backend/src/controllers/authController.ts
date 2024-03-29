import { Request, Response } from "express";
import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


declare global {
  namespace Express {
    interface Request {
      userId:string
    }
  }
}


const authUser = async (req: Request, res: Response) => {
  console.log("login");
  
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET_KEY as string,
      {
        expiresIn: "1d",
      }
    );

    res.cookie("auth_token",token,{
      httpOnly:true,
      secure: process.env.NODE_ENV === "production",
      maxAge:86400000
    })
    res.status(200).json({userId:user._id})
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};


const validateToken= async (req: Request, res: Response) => {
    res.status(200).send({userId:req.userId})
}


const logOut= (req: Request, res: Response)=>{

   res.cookie('auth_token'," ",{
    expires:new Date(0)
   })

  res.send();
}


export { authUser,validateToken,logOut };
