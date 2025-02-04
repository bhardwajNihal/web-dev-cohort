import { useState } from "react"

export function Page1(){

    const [disabled, setDisabled] = useState(false)

return <div className="parent h-svh w-full bg-blue-500 flex flex-col justify-center items-center">
        <div className="logo text-white font-bold text-3xl mb-12"><span className="text-blue-400 font-bold ">Webinar</span>.gg</div>
        <div className="age text-white text-2xl mb-10">Verify your age</div>
        <p className="text-gray-400">Please confirm your birth year. This data will not be stored.</p>
        <input className="border-none rounded bg-slate-700 px-10 text-gray-400 py-1 m-4" type="date" placeholder="Your birth year" />
        <input style={{backgroundColor : (disabled) ? "grey" : "blue"}} type="submit" className="border-none rounded px-20 text-white py-1 cursor-pointer" />
        </div>
}