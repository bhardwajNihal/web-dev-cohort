"use client" ;
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export default function Dashboard(){
    const {data:session} = useSession()
    const router = useRouter();

    if(!session){
        return <div>
            <h2>You need to signin to view this page</h2> 
            <button onClick={() => router.push('/signin')}>signIn</button>
        </div>
    }

    return <div>
        <h2>Welcome {session.user?.name}</h2>
        <p>Email : {session.user?.email}</p>
        <button onClick={() => signOut()}>Logout</button>
    </div>
}