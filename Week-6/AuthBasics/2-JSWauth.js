const express = require("express")
const app = express()

const jwt = require("jsonwebtoken");
const JWT_SECRET = "ilovenidhi3000";

app.use(express.json())

let users = [];

// retrieves the username and the password from the body, in the post request
// checks if the username already exists, if so doesn't allow to signup
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

// checks if the username and the password already exists in the users array(in database ideally), if so means the user has signed up
// if not sends "user doesn't exist" msg, user have to necessarily sign up 
// if so then generates the jwt, with the username as the payload and the JWT_SECRET variable as the key(which is used in both the encoding and decoding)
// So,that after signing in, in all the subsequent request it can just identify the user by the username decoded from the payload.
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
            msg : "invalid username of password!!"
        })
    }

})

// on the requests after the successful sign in, the server gets the token from the header,verifies and  decodes it to get the username
// that username (unique) is further used to retrieve all the necessary data from the database.
app.get("/me",(req,res)=>{
    const gotToken = req.headers.authorization;

    let founduser = jwt.verify(gotToken,JWT_SECRET);
    let userdetails = users.find(u => u.username ===founduser.username);     //have to find the user with the username decoded to get further data about him, as the founduser only decodes the username

    if(userdetails){
         res.json({
            username : userdetails.username,
            password : userdetails.password
        })
    }
    else{
        res.json({
            msg : "Invalid token!"
        })
    }

})

app.listen(3000,()=>[
    console.log("server listening on port 3000")
])