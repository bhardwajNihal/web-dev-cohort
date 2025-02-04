
Setup : 
    - initialize an empty node typescript project 
    - install a websocket library - npm i ws @types/ws 
    - start writing code to create webSocketServer





Theory : 

    - WebSockets are a communication protocol that enables full-duplex, real-time communication between a client (e.g., a browser) and a server over a single, long-lived connection. 
    - Unlike traditional HTTP, which is request-response based, WebSockets allow both parties to send and receive messages independently of each other.
    - Common usecases : 
        - chat application, gaming, live notifications(new, stock prices), collaborative tools


Key Features:
    - Persistent Connection: A single WebSocket connection remains open, eliminating the need to repeatedly establish connections for each message.
    - Bi-directional Communication: Both client and server can send and receive messages at any time.
    - Low Latency: Reduced overhead compared to HTTP, making WebSockets suitable for real-time applications.
    - Lightweight: Uses a small initial handshake and then switches to a binary frame-based protocol, minimizing data transfer.


How it Works:
    - The client initiates a connection with the server using an HTTP request with an Upgrade header.
    - If the server supports WebSockets, it responds with a 101 status code, switching the protocol.
    - A persistent connection is established, allowing the client and server to exchange messages until the connection is closed.
