
const Router = require("express")
const userrouter = Router()
const { userModel, purchaseModel, courseModel } = require("../db");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET_USER = process.env.JWT_SECRET_USER;
const zod = require("zod");
const { userAuth } = require("../middlewares/user");
const course = require("./course");

// all the route handlers for request on /user endpoint

    userrouter.post("/signup", async(req,res)=>{
        //validating input 
        const validInput = zod.object({
            firstname : zod.string().min(2).max(100),
            lastname : zod.string().min(2).max(100),
            email : zod.string().email().max(100),
            password : zod.string()
            .min(6, "Password must be at least 6 characters long")
            .max(100)
            .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
            .regex(/[a-z]/, "Password must contain at least one lowercase letter")
            .regex(/[\W_]/, "Password must contain at least one special character")
        })

        const validateInputData = validInput.safeParse(req.body)        //safely parse the req.body a/c to validInput

        if(!validateInputData.success){
            res.status(402).json({
                msg : "invalid input format",
                error : validateInputData.error.errors
            })
            return;
        }

        //finally, once the inputs are validated, 
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const password = req.body.password;

        const foundUser = await userModel.findOne({email : email})
        
        if(foundUser){
            res.status(403).json({
                msg : "email already exists!"
            })
            return
        }

        const hashedpassword = await bcrypt.hash(password,5)

        await userModel.create({
            firstname : firstname,
            lastname : lastname,
            email : email,
            password : hashedpassword
        })

        res.json({
            msg : "you signed up successfully!"
        })
    })

    userrouter.post("/signin", async(req,res)=>{
        const email = req.body.email;
        const password = req.body.password;

        const finduser = await userModel.findOne({
            email : email
        })

        if(!finduser){
            res.status(403).json({
                msg : "user not found, please signup first!"
            })
            return;
        }

        const comparePassword = await bcrypt.compare(password,finduser.password)

        if(!comparePassword){
            res.status(403).json({
                msg : "incorrect password!"
            })
            return;
        }

        const token = jwt.sign({
            id : finduser._id.toString()
        },JWT_SECRET_USER);

        res.json({
            msg : "user signed in successfully!",
            token : token
        })

    })

    userrouter.get("/purchases",userAuth, async(req,res)=>{             //endpoint to see all the purchased course
        const userId = req.userId;

        const purchases = await purchaseModel.find({
            userId
        })
        const courseData = await courseModel.find({
            _id : { $in : purchases.map( item => item.courseId)}
        })

        res.json({
            purchases,
            courseData
        })
    })

module.exports = {
    userrouter : userrouter
}