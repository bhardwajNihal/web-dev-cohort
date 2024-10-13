// importing dependencies
    const { Router } = require("express");
    const UserRouter = Router();
    const { z } = require('zod')
    const bcrypt = require('bcrypt')
    const jwt = require('jsonwebtoken')
//importing auth middleware and usermodel
    const { userAuth } = require("../middleware/user");
    const { UserModel, TodoModel } = require("../database/index");
// importing sensitive infos from .env file
    require('dotenv').config();
    const JWT_SECRET = process.env.JWT_SECRET;


// User Routes

    

    UserRouter.post('/signup', async(req, res) => {
        const validInput = z.object({
            name : z.string().max(50),
            email : z.string().email().max(100),
            password : z.string().min(6).max(50)
        })

        const validateInputDate = validInput.safeParse(req.body);

        if(!validateInputDate.success){
            console.log(validateInputDate)
            res.status(403).json({
                msg : "invalid input format!",
                error :validateInputDate.error.errors
            })
            return;
        }

        const { name, email, password } = req.body

        const finduser = await UserModel.findOne({email})

        if(finduser){
            res.status(403).json({
                msg : "user already exists!"
            })
            return;
        }

        const hashedpassword = await bcrypt.hash(password,5);

        await UserModel.create({
            name, email, password : hashedpassword
        })
        res.json({
            msg : "user signed up successfully!!"
        })
    });


    UserRouter.post('/signin', async(req, res) => {
        const { email, password } = req.body;

        const finduser = await UserModel.findOne({
            email
        })

        if(!finduser){
            res.status(403).json({
                msg : "user does not exist, please sign up!"
            })
            return;
        }

        const decodePassword = await bcrypt.compare(password,finduser.password);
        
        if(!decodePassword){
            res.status(403).json({
                msg : "incorrect password!"
            })
            return;
        }

        const token = jwt.sign({
            userId : finduser._id
        },JWT_SECRET)

        res.status(200).json({
            msg : "You signed in successfully!!",
            token : token
        })

    });

    UserRouter.get('/getAllTodos',userAuth, async(req, res) => {
        const userId = req.userId;

        const findtodo = await TodoModel.find({
            userId
        })

        if(findtodo){
            res.json({
                todos : findtodo
            })
        } 
        else{
            res.json({
                msg : "you don't have any todo!"
            })
        }
        
    });

    UserRouter.post('/logout',userAuth, (req, res) => {
    
        // remove token from headers, in postman manually to simulate logout
        // in client side (browser) : 
        // When user logs out, 
            // remove the token from localStorage
            // localStorage.removeItem('token');

            // // Optionally, if you store it in sessionStorage, use:
            // sessionStorage.removeItem('token');
        res.json({
            msg : "you logged out, successfully!"
        })

    });

module.exports = {
    UserRouter
}