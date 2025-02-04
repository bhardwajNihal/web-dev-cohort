const fs = require("fs")

let userinfo = [];
let datatobeAdded = {
        name : "ayushi",
        age : 22
    }

let data = fs.readFile("file.json", "utf-8" ,(err,data)=>{
if(err) console.log(err);
else{
    userinfo = JSON.parse(data);            //data from the another file stored in userinfo
    userinfo.push(datatobeAdded);

    fs.writeFile("file.json", (JSON.stringify(userinfo,null,2)), (err)=>{
        if(err) console.log(err);
        else console.log("data written successfully")
    }) 
}
})

