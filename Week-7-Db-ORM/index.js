
const express = require("express");                         //backend framework
const app = express();                                      
const jwt = require("jsonwebtoken");                        //token generation
const JWT_SECRET = "nihal123";                              
const { z } = require("zod");                               //input validation
const bcrypt = require("bcrypt");                           //hashing password
const { default: mongoose } = require("mongoose");          //importing ORM for Db communication
const {Usermodel, Todomodel} = require("./db");             //importing data models from the ORM file

// connecting database
(async function connectToDb(){          //coz it's a aysynchronous task and can take some time
    await mongoose.connect("mongodb+srv://bhardwajnihal00721:nihalmongo123@cluster2112.q9cou.mongodb.net/newtodo-nihal2112");
})()  //IIFE
   
app.use(express.json());
        
app.post("/signup",async (req,res)=>{
// integrating zod for input validation
    const requiredBody = z.object({
        name : z.string().min(3).max(100),
        email : z.string().max(100).email(),
        password: z.string()
        .min(6, "Password must be at least 6 characters long")
        .max(100)
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[\W_]/, "Password must contain at least one special character") // \W is a non-word character or use specific ones like [!@#$%^&*]

    })
    const validateInputData = requiredBody.safeParse(req.body)          //returns either success or err

    if(!validateInputData.success){                 // if input validated successfully
        res.json({
            msg : "Enter valid fields!!!",
            error: validateInputData.error.errors // Provide specific validation error messages
        })
        return;
    }
    // once the input is validated
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    // checking for duplicates 
    const foundUser = await Usermodel.findOne({
        email : email
    })
    if(foundUser){
        res.send({
            msg : "email already exists!"
        })
        return;
    }
  
    // hashing password : using bcrytp - takes 2 arguments(passwords, saltrounds)
    const hashedpassword = await bcrypt.hash(password,5)        //can take either of promisified or callback approach

    //assining credentials to the model for creation of a users document
    await Usermodel.create({                        //is an asynchronous operation
        name : name,
        email : email,
        password : hashedpassword
    })
    
    res.json({
        msg : "you signed up successfully!"
    })
})

app.post("/signin",async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const foundUser = await Usermodel.findOne({
        email : email,                                  //no need to find based on the plaintext password this time
    })

    if(!foundUser){
        res.status(403).json({
            msg : "user not found!"
        })
        return;
    }
    
    const comparePassword = await bcrypt.compare(password, foundUser.password)

    if(comparePassword){
        const token = jwt.sign({
            id : foundUser._id.toString()
        }, JWT_SECRET)
        res.json({
            token : token
        })
    }
    else{
        res.status(403).json({
            msg : "wrong password!"
        })
    }
})

function authenticate(req,res,next){

    const tokenRecieved = req.headers.token;

    const verifiedResponse = jwt.verify(tokenRecieved,JWT_SECRET)

    if(verifiedResponse){
        req.userId = verifiedResponse.id;           //as id was used to create token, we get it back on being decoded 
        next()
    }
    else{
        res.status(403).json({
            msg : "invalid token, login again"
        })
    }

}


app.post("/addtodo",authenticate,async(req,res)=>{
    const userId = req.userId;
    const title = req.body.title;
    const isdone = req.body.isdone;

    await Todomodel.create({
        todoname : title,
        isdone : isdone,
        userId : userId
    })

    res.json({
        msg : "todo created successfully!!!"
    })
})

app.get("/givetodos",authenticate,async(req,res)=>{
    
    const userId = req.userId;
    const response = await Todomodel.find({             //find takes object a parameter  returns an array as response
        userId
    });

    if(response){
        res.json({
            todos: response.map(response => ({              //as response is an array so it can't be directly accessed, it should be iterated
                title: response.todoname,
                isdone: response.isdone
            }))
        })
    }
    else{
        res.json({
            msg : "no todos found"
        })
    }
})




app.listen(3000,()=>{
    console.log("server listening on port 3000");
    
})