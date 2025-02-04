const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId

// Define schemas

const UserSchema = new mongoose.Schema({
    name : {type : String, required: true},
    email : {type : String, required : true},
    password : {type : String, required : true}
});

const TodoSchema = new mongoose.Schema({
    title : {type : String, required : true},
    priority : {type : String, default : "high"},
    createdAt : {type : Date , default : Date.now()},
    dueDateandTime : {type : Date},
    userId : {type : ObjectId},
});

const UserModel = mongoose.model('users', UserSchema);
const TodoModel = mongoose.model('todos', TodoSchema);

module.exports = {
    UserModel,
    TodoModel
}