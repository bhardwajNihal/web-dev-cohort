
const fs = require("fs");

const data = fs.readFile("newfile.json", "utf-8", (err, data)=>{
    if(err) return err;
    else{
        let dataobj = JSON.parse(data);         // to parse json obj to js object
        console.log(dataobj);
        let strobj = JSON.stringify(dataobj);         //to again convert a js obj to a json
        console.log(strobj);
        }
});

let dataToBeAdded = {
    "sexy" : true,
    "educated" :false,
    "interestedInme" : false,
}

fs.writeFile("newfile.json",JSON.stringify(dataToBeAdded), (err)=>{})

console.log(data);
