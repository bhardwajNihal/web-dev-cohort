"use client"            // to use the onClick handler

import axios from "axios";
import { useRef } from "react"

export default function Signin(){

    const usernameRef = useRef()
    const passwordRef = useRef()

    async function signin(){
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        console.log(username + ", "+ password);
        const response = await axios.post("http://localhost:3000/api/user/signin",{
            username,
            password
        })
        console.log(response.data);
        

        
    }

    return <div className="border border-white h-60 w-64 flex flex-col gap-4 p-4 ">
        <input className="bg-black border border-gray-400 p-2 rounded-lg" ref={usernameRef} type="text" placeholder="Username" />
        <input className="bg-black border border-gray-400 p-2 rounded-lg" ref={passwordRef} type="password" placeholder="pasword" />

        <button onClick={signin} className="border border-gray-500 p-2 rounded-lg bg-gray-800">Sign In</button>
    </div>
}

