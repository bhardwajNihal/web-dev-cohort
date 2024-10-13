const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT;
const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;


app.use(express.json());

const { UserRouter } = require('./routes/user')
const { todoRouter } = require('./routes/todo')

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Frontend/landingPage.html');
});
app.get('/home',(req,res)=>{
    res.sendFile(__dirname + '/Frontend/homePage.html')
})

app.use("/user",UserRouter)
app.use("/todo",todoRouter)

async function connectToDbFirst(){
    try{
        await mongoose.connect(MONGODB_CONNECTION_STRING)
        console.log("Database connected successfully!")
        app.listen(port, ()=> console.log(`server is running at http://localhost:${port}`));
    }
    catch(e){
        console.log("failed connecting to database!")    
    }
}
connectToDbFirst()

