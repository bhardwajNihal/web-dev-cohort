"use client" ;
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export default function Dashboard(){
    const {data:session} = useSession()
    const router = useRouter();
    console.log(session);
    if(!session){
        return <div>
            <h2>You need to signin to view this page</h2> 
            <button onClick={() => router.push('/api/auth/signin')}>signIn</button>
        </div>
    }

    return <div>
        
        <h2>Welcome {session.user?.name}</h2>
        <p>Email : {session.user?.email}</p>
        <button onClick={() => signOut()}>Logout</button>
    </div>
}


// "use client";
// import { signIn } from "next-auth/react"
// import { useRouter } from "next/navigation";
// import { useRef } from "react"

// export default function SingIn(){

//     const emailRef = useRef<HTMLInputElement>(null);
//     const passwordRef = useRef<HTMLInputElement>(null);
//     const router = useRouter()

//     async function handleSignin(){
//         const email = emailRef.current?.value;
//         const password = passwordRef.current?.value;

//         const result = await signIn("credentials",{email, password, redirect:false})

//         if(result?.error){
//             alert("invalid credentials")
//             return;
//         }
//         else{
//             router.push("/dashboard")
//         }
//     }

//     return <div className="h-56 w-64 flex flex-col gap-4 justify-center items-center">
//         <h2 className="font-bold">signin page</h2>

//         <input className="w-full rounded px-2 py-1 bg-black border border-gray-500" ref={emailRef} type="email" placeholder="email" />
//         <input className="w-full rounded px-2 py-1 bg-black border border-gray-500" ref={passwordRef} type="password" placeholder="password" /> 

//         <button className="bg-blue-600 w-full py-1 rounded" onClick={() => handleSignin()}>Sign In</button>

//     </div>
// }