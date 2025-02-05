import { Link } from "react-router-dom"

export function Home(){

    return <div className="flex flex-col items-center">
        <h2 className="font-bold text-4xl"><span>Pay</span>-to-One</h2>
        <h3 className="text-xl">Experience seamless transactions</h3>
        <p className="text-lg text-gray-600">Pay securely to friends, family or anyone with just few taps.</p>
        
        <div className="mt-6 flex gap-2">
        <Link to="/signup"><button className="bg-black text-white rounded-lg px-4 py-2 cursor-pointer">Sign Up</button></Link>
        <Link to="/signin"><button className="border border-black rounded-lg px-4 py-2 cursor-pointer">Sign In</button></Link>
        </div>
    </div>
}