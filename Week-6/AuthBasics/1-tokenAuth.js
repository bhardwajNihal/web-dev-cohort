const express = require ("express")
const app = express();

app.use(express.json())

const users = [];

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        token += options[Math.floor(Math.random() * options.length)];
    }
   return token;
}

app.post("/signup",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    if(users.find(u =>u.username ===username)){         //if the user already signed up and exist in the array
        res.json({
            "msg" : "already logged in!"            
        })
        return
    }
    users.push({
        username : username,
        password : password
    })
    res.json({
        "msg" : "you signed up successfully!"
    })
    
})

app.post("/signin",(req,res)=>{
    const gotUsername = req.body.username;
    const gotpassword = req.body.password;

    //check if the user has signed up or not , if true then the user object is passed by reference to the founduser variable, so that it can be manipulated directly
    const founduser = users.find(u => u.username ===gotUsername && u.password === gotpassword);

    // if the credentials match then assign that user a unique token
    if(founduser){
        const tokengen = generateToken();
        founduser.token = tokengen;
        res.send(`token : ${tokengen} is assigned to you`)
    }
    else {
        res.json({
            msg : "invalid username or password!"
        })
    }
})

// give back user details once authenticated : 
app.get("/mydetails", (req,res)=>{
    const token = req.headers.authorization;
    let founduser = users.find(u => u.token ===token);
    if(founduser){
        res.json({
            yourInfo : founduser
        })
    }
    else{
        res.status(404).json({
            msg : "user not found!"
        })
    }
    
})


app.listen(3000, ()=>{
    console.log("server listening on port 3000")
});
