
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req: NextRequest){

    const data = await req.json()
    console.log(data);

// adding entry to the db
    const prisma = new PrismaClient()

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