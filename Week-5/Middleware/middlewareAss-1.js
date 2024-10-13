const express = require("express")
const app = express();

// In Express.js, **middleware** refers to functions that have access to the request object (`req`), response object (`res`), and the `next` function in the application's request-response cycle. Middleware functions can perform a variety of tasks, such as 

// 1. Modifying the request or response objects.
// 2. Ending the request-response cycle.
// 3. Calling the next middleware function in the stack.


// modifying the request : 
    // app.use(function(req, res, next) {
    //     console.log("request received");
    //     req.name = "nihal";                 //setting a name attribute to the req object
    //     next();
    // })

// Ending the request/response cycle : 
    // app.use((req,res,next)=>{
    //     res.send("you are not allowed to cheat, it's your exam!!")
    // })


// Calling the next function is the stack
app.use((req,res,next)=>{
    console.log("Request recieved")
    // Assignment-1 :
    let date = new Date(); 
    console.log("Request url : ",req.url);
    console.log("Request http method : ", req.method);
    console.log("Current time : ",date.getHours()," hrs", date.getMinutes(),"minutes" )
    next()
})

app.get("/sum", function(req, res) {
    // console.log(req);                   //is a very big object has a lot of attributes, print all
    // console.log(req.name);              //accessing the name attribute of the req object in the middleware
    
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.listen(3000,()=>{
    console.log("actively listening on port 3000");
})