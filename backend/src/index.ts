import express from "express"; 
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./routes/userRoutes";
import { ConnectToDB } from "./db/dbconnection";
import { accountRouter } from "./routes/accountRoutes";

dotenv.config();
const app = express();
app.use(express.json())
app.use(cors());

const port = process.env.PORT;

// route to handle all requests at /user endpoint
    app.use("/api/v1/user", userRouter);

// route to handle all requests at /account endpoint
    app.use("/api/v1/account", accountRouter);



ConnectToDB().then(() => {
    app.listen(port, () => {
        console.log("server listening at port", port);    
    })
}).catch(() =>{
    console.log("Db connection failed!")
});
