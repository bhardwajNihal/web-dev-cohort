
import { useEffect, useRef, useState } from 'react'
import './App.css'


// ping-pong FE
function App() {
  const [socket, setSocket] = useState()    // getting the instance for websocket communication
  const inputref = useRef()

  function handleMessage(){
  //@ts-expect-error -m "msg"
    const message = inputref.current.value;

    if(!socket) return;           // return if connection not established
//@ts-expect-error -m "msg"
    socket.send(message);         // sending message from client

  }

// Connecting to the websocket server:
  useEffect(()=>{
  const ws = new WebSocket("ws://localhost:8080")     // eshtablishing connection on mount
  //@ts-expect-error -m "msg"
    setSocket(ws)                                     // setting the ws instance

    ws.onmessage = (ev) => {           
      alert(ev.data)             // telling ws server what to do on recieving message from client
    }
  },[])

  return (
    <div>
      <input ref={inputref} type="text" placeholder='type message...' />
      <button onClick={handleMessage}>send</button>
    </div>
  )
}

export default App
