
// Basic hospital management

let patient1 = {
    name : "raj",
    kidney : [{ishealthy : false}, {ishealthy : true}]
}



const express = require("express");
const app = express();

app.use(express.json())         // in order to be able to parse json recieved in the body


app.get("/", function(req,res){
    const totalNoOfKidneys = patient1.kidney.length;
    let noOfHealthyKidneys = 0;
    for(let i =0;i<totalNoOfKidneys ;i++){
        if(patient1.kidney[i].ishealthy) noOfHealthyKidneys++;
    }
    noOfUnhealthyKidneys = totalNoOfKidneys -noOfHealthyKidneys;

    res.json({
        totalNoOfKidneys,noOfHealthyKidneys,noOfUnhealthyKidneys
    })
})


app.post("/",function(req,res){
let health = req.body.ishealthy;       //gets true or false
patient1.kidney.push({
    ishealthy : health
})
res.json({message :  "done"})
})


app.put("/", function(req,res){
    for(let i =0;i<patient1.kidney.length ;i++){
        patient1.kidney[i].ishealthy = true;
    }
    res.json({})
})


app.delete("/", function(req,res){
    let healthyKidneysArr = patient1.kidney.filter((part) => {
        return part.ishealthy == true;
    } )
    patient1.kidney = healthyKidneysArr;
    res.json({"msg" : "all the unhealthy kidney removed"})
})

app.listen(3000)