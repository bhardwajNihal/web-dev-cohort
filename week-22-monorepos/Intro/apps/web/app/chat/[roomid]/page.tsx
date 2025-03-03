"use client";

import { useParams } from "next/navigation";

export default function ChatRoom(){

    const params = useParams();     //extracting the dynamic route query
    console.log(params);
    

    return <div>
        Welcome to chat room : {params.roomid}
    </div>
}