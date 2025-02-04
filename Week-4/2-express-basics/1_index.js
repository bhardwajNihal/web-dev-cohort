

// this is the basic boiler plate to use express to create http servers

    const express = require("express");             //express is required into this file
    const app = express();                          //called express and stored it into a variable "app" to use its functionalities


// "req" is an object that represents the HTTP request and contains information about the request, like query parameters, headers, and body. 
// "res" is an object representing the HTTP response that an Express app sends when it receives an HTTP request.
    app.get("/", function(req,res){             //default route that will run on the localhost port 3000
        res.send("hello there")                 // local server will respond back with this basic text 
    })

// Route handlers : get, post, put, delete, etc.

    app.get("/findthesum", (req,res)=>{     
    const n = req.query.n;                      // the syntax to give any argument in the route itself for the server to catch and respond back
    let sum = 0;
    for(let i = 1; i<=n; i++){
        sum += i;
    }
    res.send("sum = " + sum);
    })

    app.listen(3000);           // our local server is basically running on the port 3000, and will listen and respond from there