// step 1 : import
import { WebSocketServer } from "ws";

// step 2 : initialize wss instance, provide a port
const wss = new WebSocketServer({port: 8080});

// step 3 : add eventhandlers 
wss.on("connection", (socket) => {
    console.log("connection eshtablished!")

    setInterval(() => {
        socket.send("hi from the server!")              //sending response from server in real time
    }, 1000);

    socket.on("message", (e) => {               // logging incoming messages
        console.log(e.toString());
    })
    
})

