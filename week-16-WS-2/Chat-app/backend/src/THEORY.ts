import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({port:8080});

const allSockets:WebSocket[] = [];      //array to keep track of all connected WebSocket clients.

wss.on("connection", (socket)=>{        // Socket: represents the unique connection between the server and a single client.

    allSockets.push(socket)               

    console.log("A client connected!");
    socket.send("hi from the server!")


// level-1 : basic single client-sever communication 
    // socket.on("message", (ev) => {
    //     const message = ev.toString()
    //     console.log("message recieved : ", message)
    //     socket.send(`${message}: sent from the server"`)
    // })                                 //- Server logs the message and replies only to that client.


// level-2 : Broadcasting the server response to each socket
    // socket.on("message", (ev) => {
    //     console.log("message recieved : ", ev.toString());
    //     allSockets.forEach(skt => {
    //         skt.send("message from server : " + ev.toString())     
    //     })
    // })                               // Server broadcasts the message to all connected clients.


// In case a client disconnected
    // socket.on("close", () =>{
    //     allSockets.filter(socketInit => socketInit != socket)
    // })                          //The server removes the disconnected client’s socket from allSockets.


// Error handling
    // socket.on("error", (err) => { 
    //     console.error("socket error : ",err);
    // })



})