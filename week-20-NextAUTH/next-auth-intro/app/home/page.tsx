"use client";

import { useRouter } from "next/navigation";            //(next/router for Pages Router, next/navigation for App Router).

export default function Home(){

    const router = useRouter()

    return <div>
        <h2 className="text-4xl font-bold">Welcome to the Homepage</h2>

        <button className="p-2 bg-blue-600 rounded m-2" onClick={() => router.push("/signup")}>Sign Up</button>
        <button className="p-2 bg-blue-600 rounded m-2" onClick={() => router.push("/api/auth/signin")} >Sign In</button>
    </div>
}