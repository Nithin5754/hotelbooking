import { Request, Response } from "express";
import User from "../models/user";

import jwt from "jsonwebtoken";



const registerUser = async (req: Request, res: Response) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ message: "user already exiss" });
    }

    user = new User(req.body);
    await user.save();
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET_KEY as string,
      {
        expiresIn: "1d",
      }
    );

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400000,
    });

    res.sendStatus(200)
  } catch (error) {
    console.log("error creating new user  :", error);

    res.json({ message: "something went wrong" });
  }
};

export default { registerUser };