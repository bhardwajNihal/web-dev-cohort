export default function Singup(){

// Prettifying the signup page. 
    return <div className="parent h-screen w-svw bg-black flex justify-center items-center">

        <div className="signup-box h-80 w-72 border border-white rounded-xl p-4 flex flex-col gap-4 pt-8">

            <input className="bg-black border border-gray-600 rounded-lg py-2 pl-2 placeholder:text-gray-600" type="text" placeholder="username" />
            <input className="bg-black border border-gray-600 rounded-lg py-2 pl-2 placeholder:text-gray-600" type="text" placeholder="email" />
            <input className="bg-black border border-gray-600 rounded-lg py-2 pl-2 placeholder:text-gray-600" type="password" placeholder="password" />
            <button className="mt-4 w-full bg-white text-black hover:bg-gray-200 rounded-lg py-2 pl-2">Sign Up</button>
            <p className="text-xs text-center">Already registered? continue <span className="text-blue-600"><u>Login</u></span></p>
        </div>
    </div>
}