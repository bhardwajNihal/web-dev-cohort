
const express = require("express")
const app = express()

let globalReqCount = 0
// Introducing a middleware here : 
function countRequests(req,res,next){
globalReqCount++;
console.clear();
console.log("Request no. : ", globalReqCount);
next();
}

// app.use(countRequests);             //middleware will automaticcaly get called for each handler after it

// app.get("/add", function(req,res){
//     let a = parseInt(req.query.a);
//     let b = parseInt(req.query.b);
//     let sum = a+b;
//     res.send(`<h1> sum : ${sum}</h1>`)
// })

// OR we can also create dynamic route as : 
    app.get("/add/:a/:b",countRequests, function(req,res){
        let a = parseInt(req.params.a);             //only need to parse in case of addition as the input is by default string and will concatenate otherwise
        let b = parseInt(req.params.b);
        let sum = a+b;
        res.send(`<h1> sum : ${sum}</h1>`)
    })

app.get("/subtract/:a/:b",countRequests, function(req,res){
    let a = req.params.a;
    let b = req.params.b;
    let diff = a-b;
    res.send(`<h1> difference : ${diff}</h1>`)
})

app.get("/multiply/:a/:b",countRequests, function(req,res){
    let a = req.params.a;
    let b = req.params.b;
    let product = a*b;
    res.send(`<h1> product : ${product}</h1>`)
})

app.get("/divide/:a/:b",countRequests, function(req,res){
    let a = req.params.a;
    let b = req.params.b;
    let quotient = a/b;
    res.send(`<h1> quotient : ${quotient}</h1>`)
})

// we can dodge the middleware function where we want : 
    app.get("/givecount",function(req,res){                                     //in case of app.use(middleware), it can be defined above it to escape it
        res.send(`The total no. of requests till now = ${globalReqCount}`);
    })

app.listen(3000, ()=>{{
    console.log("server actively listening on the port 3000");
    
}})