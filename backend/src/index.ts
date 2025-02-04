import express from "express"; 
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./routes/userRoutes";
import { ConnectToDB } from "./db/dbconnection";

dotenv.config();
const app = express();
app.use(express.json())
app.use(cors());

const port = process.env.PORT;

app.use("/api/v1/user", userRouter);


ConnectToDB().then(() => {
    app.listen(port, () => {
        console.log("server listening at port", port);    
    })
}).catch(() =>{
    console.log("Db connection failed!")
});
