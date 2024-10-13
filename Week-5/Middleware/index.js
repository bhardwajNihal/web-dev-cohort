
const express = require('express')
const app = express();

// a basic function to act as a middleware 
    // function authenticate(password){
    //     if(password ==="nihal") return true;
    //     else return false;
    // }

// Now a function that is more syntactically sound
    function middlewareFunc(req,res,next){          // has access to the req,res, and a next handler
        let authinfo = req.query.password;
        if(authinfo ==="nihal") next();             //the control is passed onto the next route handler only when criteria is met and next is called
        else{
            res.json({"msg" : "wrong password"})
        }
    }   

// app.use(middlewareFunc)                 //one way to call middleware

// app.get("/nihal",middlewareFunc ,(req,res)=>{           // can also specify the series of function call with the route is hit, thus calling the middleware before the main function is called that carries out the desired operation        
//     res("you logged in successfully!!")
// })


// OR We can also define a main function outsite the route handler and later call it
    function displayLoginInfo(req,res){
        res.send("you logged in successfully !!!");
    }
// a more cleaner way to write handlers : 
    app.get("/nihal", middlewareFunc, displayLoginInfo);    


//EXPRESS CAN BE CALLED AS NOTHING BUT A CHAIN OF MIDDLEWARES, WHERE EACH EACH FUNCTION HAS THE ACCESS TO THE REQ AND RES, AND THE NEXT FUNCTION

app.listen(3000,()=>{
    console.log("server listening on the port 3000")
})