import express from 'express';
import { Request, Response } from 'express';
const app = express();

app.post("/signup", (req:Request, res:Response) => {
    res.send("signup endpoint")
})


app.post("/signin", (req:Request, res:Response) => {
    res.send("signin endpoint")
})


app.post("/chat", (req:Request, res:Response) => {
    res.send("chat endpoint")
})

app.listen(3001, () => {
    console.log("app listening on port 3001");
    
})