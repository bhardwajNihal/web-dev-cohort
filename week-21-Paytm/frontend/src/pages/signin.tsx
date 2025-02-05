import { Link } from "react-router-dom"
import { useRef } from "react"
import axios from "axios"
import { BACKEND_URL } from "../constants"
import { useNavigate } from "react-router-dom"

export function Signin() {

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const navigate = useNavigate()

    async function submit() {
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if (!email || !password) {
            alert("All fields are required!!")
        }

        try {
            const response = await axios.post(BACKEND_URL + "/api/v1/user/signin", {
                email, password
            });
            alert(response.data.message);
            localStorage.setItem("token",response.data.token);
            navigate("/dashboard")
        } catch (error) {
            console.error("Signup error:", error);
            alert("Signup failed! " + (error.response?.data?.message || "Try again later"));
        }
    }

    return <div className="h-auto w-72  bg-white border border-gray-400 rounded-lg shadow-lg p-3 py-8 flex flex-col gap-3">
        <input
            className="w-full rounded p-2 placeholder:text-gray-400 border border-gray-400" type="text" placeholder="nihal123@gmail.com" 
            ref={emailRef}
            />
        
        <input
            className="w-full rounded p-2 placeholder:text-gray-400 border border-gray-400" type="password" placeholder="password" 
            ref={passwordRef}/>
        
        <button
            className="bg-black text-white p-2 rounded mt-4 cursor-pointer"
            onClick={submit}
            >Sign In</button>

        <p className="text-xs text-center cursor-pointer">Don't have an account? <Link to="/signup"><span className="text-blue-500"><u>Register</u></span></Link></p>
    </div>
}