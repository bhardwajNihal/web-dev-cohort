const express = require("express")
const app = express()

const jwt = require("jsonwebtoken");
const JWT_SECRET = "ilovenidhi3000";

app.use(express.json())

let users = [];

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/signup", (req,res)=>{
    const gotusername = req.body.username;
    const gotpassword = req.body.password;

    if(users.find(u => u.username=== gotusername)){
        res.json({
            msg : "username already exists!"
        })
        return;
    }
    users.push({
        username : gotusername,
        password : gotpassword
    })
    res.json({
        msg : "signed up successfully!"
    })
})

app.post("/signin",(req,res)=>{
const gotUsername = req.body.username;
const gotpassword = req.body.password;

let founduser = users.find(u => u.username===gotUsername && u.password===gotpassword);

    if(founduser){
        let jwtTokengenerated = jwt.sign({
            username : founduser.username           //the token created will have the username as the payload and a secret code to encode and further decode the data, it's not recommended to give password as the payload as that can be decoded
        },JWT_SECRET);
        founduser.token = jwtTokengenerated;
        res.json({
            token : founduser.token
        })
    }
    else{
        res.json({
            msg : "invalid username or password!!"
        })
    }

})

// Authentication middleware : verifies the user separately, so the all the route handler could escape the process and only focue on their main task
function Authenticate(req,res,next){
    const gottoken = req.headers.authorization;
    const founduser = jwt.verify(gottoken,JWT_SECRET)

    if(founduser){
        req.username = founduser.username;
        next();
    }
    else{
        res.json({
            msg : "Invalid token!"
        })
    }
}


app.get("/me",Authenticate,(req,res)=>{
    const founduser = users.find(u => u.username === req.username);
    res.send({
        username : founduser.username,
        password : founduser.password
    })
})



app.listen(3000,()=>[
    console.log("server listening on port 3000")
])