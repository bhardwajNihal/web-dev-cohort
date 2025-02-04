
import { useEffect, useRef, useState } from 'react'
import './App.css'
import { json } from 'express'

function App() {
  const inputRef = useRef()
  const [messages, setMessages] = useState([])
  const [socket, setSocket] = useState()

  function handleMessage(){
    const message = inputRef.current?.value;

    if(!message || !socket) return;

    socket.send(JSON.stringify({
      "type" : "chat", 
      "payload" : {
        "message" : message
      }
    }))

    setMessages(prevMessages => [...prevMessages,`You : ${message}`])
    inputRef.current.value = ""
  }

// connecting to ws server
useEffect(()=>{
  const ws = new WebSocket("ws://localhost:8080",)
  setSocket(ws);

  ws.onopen = () => {

    ws.send = () =>{
      JSON.stringify({
        "type" : "join",
        "payload" : {
          "room" : "room-1"
        }
      })
    }
    alert("connected to room-1")
  }

  ws.onmessage = (ev) => {
    setMessages( m => [...m,`Server : ${ ev.data}`])
  }

  return () => {
    ws.close(); // Cleanup on component unmount
  };

},[])

  return <div className="parent-box">

    <h2 className="heading">jusCHAT</h2>

    <div className="chat-box">

      <div className="chats">
        {messages.map((message,index) => <div key={index} className="message">{message}</div>)}
      </div>

      <div className="input">
        <input ref={inputRef} className='input-val' type="text" placeholder='Type message...' />
        <button onClick={handleMessage} className='send-butt'>Send</button>
      </div>

    </div>
  </div>
}

export default App
