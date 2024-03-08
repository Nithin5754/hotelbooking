import { NextFunction,Request,Response} from "express";

const { body, validationResult } = require('express-validator');

 const validateLogin = ()=>{
  return  [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
   ]
 };

  const loginValidationMiddleware = (req: Request, res: Response,next:NextFunction)=> {
 const errors = validationResult(req);
 if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
 }
 next();
};


export {validateLogin,loginValidationMiddleware}