"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
const allSockets = []; // array of complex objects of type user
wss.on("connection", (socket) => {
    console.log("A client connected!");
    socket.send("hi from the server!");
    socket.on("message", (msg) => {
        var _a;
        const parsedMessage = JSON.parse(msg); //parsing recieved message string to js object
        // checking if the input is correct
        if (!parsedMessage.type || !parsedMessage.payload) {
            console.error("Invalid Input Format");
            socket.send("Invalid Input Format!");
            return;
        }
        if (parsedMessage.type === "join" && !parsedMessage.payload.room) {
            console.error("ERROR: missing Room Info.");
            socket.send("ERROR: missing Room Info.");
            return;
        }
        if (parsedMessage.type === "chat" && !parsedMessage.payload.message) {
            socket.send("ERROR: missing chat message!");
            return;
        }
        // Checking if the client wants to join, if so, push it instance object to allSockets array
        if (parsedMessage.type == "join") {
            console.log("client wants to join room", parsedMessage.payload.room);
            allSockets.push({
                socket,
                //@ts-ignore
                room: parsedMessage.payload.room
            });
        }
        // Now if the join client wants to chat: 
        // 1. check for the room it's connected in;
        // 2. send the message recieved, to every client of that room
        else if (parsedMessage.type == "chat") {
            console.log("client wants to chat, message : ", parsedMessage.payload.message);
            const currentClientRoom = (_a = allSockets.find(x => x.socket == socket)) === null || _a === void 0 ? void 0 : _a.room;
            allSockets.forEach(skt => {
                if (skt.room == currentClientRoom) {
                    //@ts-ignore
                    skt.socket.send("From server : " + parsedMessage.payload.message);
                }
            });
        }
    });
    // Handle Postman-like messages sent to the server
    wss.on("message", (msg) => {
        console.log("Received from external client:", msg);
        allSockets.forEach(({ socket }) => {
            socket.send(`External Message: ${msg}`);
        });
    });
    //Handling error : 
    socket.on("error", (err) => {
        console.error("Websocket Error : ", err);
    });
    //Handling disconnection
    socket.on("close", () => {
        console.log("client disconnected !");
        const index = allSockets.findIndex(x => x.socket === socket);
        if (index != -1) {
            allSockets.splice(index, 1); // removing the socket instance for the disconnected client
        }
    });
});
