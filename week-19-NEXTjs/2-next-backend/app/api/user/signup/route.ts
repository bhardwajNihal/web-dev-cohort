
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prismaClientInstance";

export async function POST(req: NextRequest){

    const data = await req.json()
    console.log(data);

// adding entry to the db

    await prisma.user.create({
        data:{
            username:data.username,
            password:data.password
        }
    })
    

    return NextResponse.json({
        message : "user signed up!",
        creds : data
    })
}