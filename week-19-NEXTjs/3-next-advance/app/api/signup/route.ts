
// Basic Post route, accepting json req body

import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest){

    const {name,email} = await req.json();  
    console.log(name,email);
      

    return NextResponse.json({name, email, 
        message : "data Recieved successfully!"
    },
    {
        status : 200
    }
)
}