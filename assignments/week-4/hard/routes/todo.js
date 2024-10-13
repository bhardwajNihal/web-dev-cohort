const { Router } = require("express");
const { userAuth } = require("../middleware/user");
const { TodoModel } = require("../database/index");

const todoRouter = Router();

// todo Routes
todoRouter.post('/create',userAuth, async(req, res) => {
    const userId = req.userId;

    const { title, priority, createdAt, dueDateandTime }= req.body;

    await TodoModel.create({
        title,priority,createdAt,dueDateandTime, userId : userId
    })

    res.json({
        msg : "todo created successfully!"
    })
});

todoRouter.put('/update',userAuth, async(req, res) => {
    const userId = req.userId;

    const {title, todoId} = req.body;

    await TodoModel.updateOne({
        userId : userId,
        _id : todoId
    },{
        title
    })

    res.status(200).json({
        msg : "todo updated successfully!"
    })
});

todoRouter.delete('/delete/:id',userAuth, async(req, res) => {      //via axios delete don't accept body, rather params
    const userId = req.userId;
    const todoId = req.params.id;

    await TodoModel.deleteOne({
        _id : todoId,
        userId : userId
    })

    res.status(200).json({
        msg : "specified todo deleted successfully!"
    })
});



module.exports = {
    todoRouter
};