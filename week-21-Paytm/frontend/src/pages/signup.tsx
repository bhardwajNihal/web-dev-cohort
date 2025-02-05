import axios from "axios"
import { useRef } from "react"
import { Link } from "react-router-dom"
import { BACKEND_URL } from "../constants"
import { useNavigate } from "react-router-dom"

export function Signup() {

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const navigate = useNavigate()

    async function submit(){
        const fullname = nameRef.current?.value;
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if(!fullname || !email || !password){
            alert("All fields are required!!");
            return;
        }

        try {
            const response = await axios.post(BACKEND_URL + "/api/v1/user/signup", {
                fullname,
                email,
                password,
            });
        
            console.log(response.data);
            alert(response.data.message); 
            navigate('/signin')

        } catch (error) {
            console.error("Signup error:", error);
            alert("Signup failed! " + (error.response?.data?.message || "Try again later"));
        }
        
    }


    return <div className="h-auto w-72  bg-white border border-gray-400 rounded-lg shadow-lg p-3 py-4 flex flex-col gap-3">
        <input
            className="w-full rounded p-2 placeholder:text-gray-400 border border-gray-400" type="text"
            placeholder="Nihal Bhardwaj"
            ref={nameRef}
            />

        <input
            className="w-full rounded p-2 placeholder:text-gray-400 border border-gray-400" type="text"
            placeholder="nihal123@gmail.com" 
            ref={emailRef}
            />

        <input
            className="w-full rounded p-2 placeholder:text-gray-400 border border-gray-400" type="password" placeholder="password" 
            ref={passwordRef}
            />

        <button
            className="bg-black text-white p-2 rounded mt-4 cursor-pointer"
            onClick={submit}
        >Sign Up</button>

        <p className="text-xs text-center cursor-pointer">Already have an account? <Link to="/signin"><span className="text-blue-500"><u>login</u></span></Link></p>
    </div>
}