"use client";

import { useRouter } from "next/navigation";            //(next/router for Pages Router, next/navigation for App Router).

export default function Home(){

    const router = useRouter()

    return <div>
        <h2 className="text-4xl font-bold">Welcome to the Homepage</h2>

        <button onClick={() => router.push("/signup")}>Sign Up</button>
        <button onClick={() => router.push("/signin")} >Sign In</button>
    </div>
}