"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// step 1 : import
const ws_1 = require("ws");
// step 2 : initialize wss instance, provide a port
const wss = new ws_1.WebSocketServer({ port: 8080 });
// step 3 : add eventhandlers 
wss.on("connection", (socket) => {
    console.log("connection eshtablished!");
    socket.send("hi from the server!");
    socket.on("message", (e) => {
        const message = e.toString();
        console.log(message);
        if (message === "ping") {
            socket.send("pong");
        }
    });
});
