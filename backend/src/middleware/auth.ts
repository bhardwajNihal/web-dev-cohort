import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import { Request, Response, NextFunction } from "express";

// Extend Request type
declare module "express-serve-static-core" {
    interface Request {
        userId?: string;
    }
}

export function userAuth(req:Request, res:Response, next:NextFunction){

    const authHeader = req.headers.authorization;

    if(!authHeader){
        res.status(403).json({
            message : "Token not provided!!"
        })
        return;
    }

    const token = authHeader.split(" ")[1];

    //verify token
    const Decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

    if(!Decoded){
        res.status(403).json({
            message : "Invalid token! Please Sign In!"
        })
        return;
    }

    req.userId = Decoded.id
    next();

}