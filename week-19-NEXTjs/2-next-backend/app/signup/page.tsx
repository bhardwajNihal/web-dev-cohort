"use client"

import axios from "axios";
import { useRouter } from "next/navigation";        //for navigation in app-router
import { useRef } from "react"

export default function Signup(){

    const router = useRouter()
    const usernameRef = useRef()
    const passwordRef = useRef()

    async function signup(){
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        console.log(username + ", "+ password);
        const response = await axios.post("http://localhost:3000/api/user/signup",{
            username,
            password
        })
        console.log(response.data);
        router.push('/signin')          //redirecting to signin page
        
    }

    return <div className="border border-white h-60 w-64 flex flex-col gap-4 p-4 ">
        <input className="bg-black border border-gray-400 p-2 rounded-lg" ref={usernameRef} type="text" placeholder="Username" />
        <input className="bg-black border border-gray-400 p-2 rounded-lg" ref={passwordRef} type="password" placeholder="pasword" />

        <button onClick={signup} className="border border-gray-500 p-2 rounded-lg bg-gray-800">Sign up</button>
    </div>
}

