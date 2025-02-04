import { Router } from "express";
import { Request, Response } from "express";
import { z } from "zod";
import { User } from "../db/models/userModel";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { userAuth } from "../middleware/auth";
import dotenv from "dotenv"
dotenv.config()

export const userRouter = Router();

userRouter.post("/signup", async (req:Request, res:Response) => {
    const validInputFormat = z.object({
        fullname : z.string().min(3).max(100), 
        email : z.string().email().max(150),
        password : z.string().min(6,"password should be of minimum 6 characters")
    })

    const validateInput = validInputFormat.safeParse(req.body);

    if(!validateInput.success){
        res.status(411).json({
            message : "invalid input format!",
            error : validateInput.error.errors
        })
        return;
    }

    // if request data is successfully validated

    const {fullname, email, password } = req.body;

    // find if user already exists
    const findUser = await User.findOne({
        email: email
    })

    if(findUser){
        res.status(411).json({
            message : "Email already exists!!"
        })
        return;
    }

    //hashing password before storing 
    const hashedPassword = await bcrypt.hash(password,10)

    await User.create({
        fullname,
        email, 
        password:hashedPassword
    })

    res.status(200).json({
        message : "User Signed Up successfully!!!"
    })

})

userRouter.post("/signin", async(req:Request, res:Response) => {
    
    const {email, password} = req.body;
    
    const finduser = await User.findOne({
        email
    });

    if(!finduser) {
        res.status(411).json({
            message : "user not found. Please Register!"
        });
        return;
    }

    const comparePassword = await bcrypt.compare(password, finduser.password)

    if(!comparePassword){
        res.status(403).json({
            message : "Incorrect password!!!"
        })
        return;
    }

    const token = jwt.sign({
        id : finduser._id.toString()
    },process.env.JWT_SECRET as string)

    res.status(200).json({
        message : "User Signed In successfully!!",
        token : token
    })

})

userRouter.put("/update", userAuth, async(req:Request, res:Response) => {
    
    const userId = req.userId;

    const {fullname, email, password} = req.body

    try{
        await User.updateOne({
        _id : userId
        },{
            fullname, 
            email,
            password
        });
        res.status(200).json({
            message : "User details updated successfully!"
        })
    }catch(error){
        console.log("Error Updating User", error);
    }

})

userRouter.get("/user-data",userAuth, async(req:Request, res:Response) => {
    const userId = req.userId;

    const foundUser = await User.findOne({
        _id : userId
    });

    if(!foundUser){
        res.status(411).json({
            message : "User not found!"
        })
        return;
    }

    res.status(200).json({
        fullname : foundUser.fullname,
        email : foundUser.email
    })

})


// Route to get all the users based on letters they start with, basically to filter out the desired user from the list of users.
userRouter.get("/bulk",userAuth, async(req:Request, res:Response) =>{

    const filterTexts = req.query.filter  || "" ;           // "" so as to get all if no filters applied

    const FoundUsers = await User.find({
        $or : [{
            fullname : {
                "$regex" : filterTexts
            }
        }]
    })

    res.json({
        users : FoundUsers.map(user => ({
            fullname : user.fullname, 
            email : user.email, 
            userId : user._id
        }))
    })

})