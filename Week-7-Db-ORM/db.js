
// importing and initializing files and instances
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;


// defining schemas(i.e. blueprint of the data to be stored)
const User = new Schema({
    name : String,
    email : {type : String , unique : true},            //email should be unique 
    password : String
})

const Todo = new Schema({
    todoname : String,
    isdone : Boolean,
    userId : ObjectId           //type of userId is objectId provided by mongoose
})

// defining model : actual data to be created and communicated, using the the schemas

const Usermodel = mongoose.model("users", User);                //"users" document will get created using the 'user' schema for communication and storage of user data
const Todomodel = mongoose.model("todos", Todo);                // "todos" document : will store todos


// to export models to be utilized in the server for further CRUD operation
module.exports = {
    Usermodel,
    Todomodel
}