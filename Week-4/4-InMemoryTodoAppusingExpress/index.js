

// making an in memory todo app and manipulating it via http requests get, post, put, delete. 
// Using 'postman' to send requests

// Only disadvantage of this approach is that the data is lost everytime the server restarts
const express = require("express")
const app = express()

app.use(express.json())  
   
let todo = [
    {
        index : 1,
        todo : "learn js",
        isdone : true,
    },
    {
        index : 2,
        todo : "lean react",
        isdone : false,
    },
    {
        index : 3,
        todo : "learn nodejs",
        isdone : true,
    },
    {
        index : 4,
        todo : "learn express",
        isdone : false,
    },
]

// to get the entire content of the current todo 
app.get("/", (req,res)=>{
    res.send(todo)
})

// to add a specified to do item from the body in the local todo
app.post("/", (req,res)=>{
    let item = req.body;            //fetches the data from the body and stores it in "item"
    todo.push(item);                // the payload is now pushed into the todo array
    res.json({"msg" : "todo added successfully !"})                    // must to send response message to signify successful completion
})

// to mark a specified item as done
app.put("/", (req,res)=>{
    let recievedindex = req.query.index;
    todo[recievedindex].isdone = true;
    res.send(todo);
})

// to delete a specified todo item
app.delete("/", (req,res)=>{
    let idx = parseInt(req.query.index);
    let filteredtodo = todo.filter((ele) => {
        if(ele.index != idx) return ele;
    })
    todo = filteredtodo;
    res.json({msg : "specified todo removed successfully!"});
})

app.listen(3000)