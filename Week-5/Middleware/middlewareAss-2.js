
const express = require("express")
const app = express()

// Middleware to count the no. of request : 
    let globalReqCount = 0;
    function countRequests(req,res,next){
    globalReqCount++;
    console.clear();
    console.log("Request no. : ", globalReqCount);
    next();
    }

app.get("/givecount",function(req,res){                                     //in case of app.use(middleware), it can be defined above it to escape it
    res.send(`The total no. of requests till now = ${globalReqCount}`);
})

app.use(countRequests);
 
app.get("/add/:a/:b", function(req,res){
    let a = parseInt(req.params.a);            
    let b = parseInt(req.params.b);
    let sum = a+b;
    res.send(`<h1> sum : ${sum}</h1>`)
})

app.get("/subtract/:a/:b", function(req,res){
    let a = req.params.a;
    let b = req.params.b;
    let diff = a-b;
    res.send(`<h1> difference : ${diff}</h1>`)
})

app.get("/multiply/:a/:b", function(req,res){
    let a = req.params.a;
    let b = req.params.b;
    let product = a*b;
    res.send(`<h1> product : ${product}</h1>`)
})

app.get("/divide/:a/:b", function(req,res){
    let a = req.params.a;
    let b = req.params.b;
    let quotient = a/b;
    res.send(`<h1> quotient : ${quotient}</h1>`)
})
    

app.listen(3000, ()=>{{
    console.log("server actively listening on the port 3000");
    
}})