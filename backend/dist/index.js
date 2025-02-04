"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = require("./routes/userRoutes");
const dbconnection_1 = require("./db/dbconnection");
const accountRoutes_1 = require("./routes/accountRoutes");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const port = process.env.PORT;
// route to handle all requests at /user endpoint
app.use("/api/v1/user", userRoutes_1.userRouter);
// route to handle all requests at /account endpoint
app.use("/api/v1/account", accountRoutes_1.accountRouter);
(0, dbconnection_1.ConnectToDB)().then(() => {
    app.listen(port, () => {
        console.log("server listening at port", port);
    });
}).catch(() => {
    console.log("Db connection failed!");
});
