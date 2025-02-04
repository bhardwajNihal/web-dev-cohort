// You have to create a middleware for rate limiting a users request based on their username passed in the header

const express = require('express');
const app = express();

// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

// let numberOfRequestsForUser = {};
// setInterval(() => {
//     numberOfRequestsForUser = {};
// }, 1000)

const ratelimitwindowMs = 10000;
const MaxReqPerwindow = 5;

// object to store IP request data : 
const IPreqData = {}

// ratelimiting middleware
function ratelimiter(req,res,next){
    const ip = req.ip;                  //fetch user IP address

    if(!IPreqData[ip]){                 //check if it's 1st req for the ip
      IPreqData[ip] = {                  //if so set this attributes to the IPreqData obj,with the IP as its key
        count : 1,                         
        starttime : Date.now()
      }
    }
    else{           //if the IP already exists, i.e. its not the 1st request from the user
        const currentTime = Date.now();
        const timePassed = currentTime - IPreqData[ip].starttime;

        if(timePassed > ratelimitwindowMs){             // if time exceeded the time limit, simply reset the count and time for the user
          IPreqData[ip].count = 1;
          IPreqData[ip].starttime = Date.now();
        }
        else{
          IPreqData[ip].count++
        }

        // now if the request counts exceeds the limit, block it and send response
        if(IPreqData[ip].count > MaxReqPerwindow){
          res.status(404).json({
            msg : "too many requests"
          })
          return
        }
        next();               //requests proceed if within the limit
    }
}


app.use(ratelimiter);



app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john',IPreqData });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;

app.listen(3000, ()=>{
  console.log("server listening at port 3000");
  
})