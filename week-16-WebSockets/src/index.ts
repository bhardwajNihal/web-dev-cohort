// step 1 : import
import { WebSocketServer } from "ws";

// step 2 : initialize wss instance, provide a port
const wss = new WebSocketServer({port: 8080});

// step 3 : add eventhandlers 
wss.on("connection", (socket) => {
    console.log("connection eshtablished!")

    socket.send("hi from the server!")

// ping-pong server
    socket.on("message", (e) => {               // logging incoming messages
        
        const message = e.toString()
        console.log(message);

        if(message === "ping"){
            socket.send("pong")
        }
        
    })
    
})

