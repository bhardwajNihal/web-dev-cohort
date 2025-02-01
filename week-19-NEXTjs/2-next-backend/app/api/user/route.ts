
import { NextResponse } from "next/server";


//DEFINING ROUTE HANDLERS

export function GET(){
    return NextResponse.json({
        message: "getting user data",
        username : "nihal",
        password: "nihal123"
    })
}

export function POST(){
    return NextResponse.json({
        message: "POSTING user data",
        username : "nihal",
        password: "nihal123"
    })
}

export function PUT(){
    return NextResponse.json({
        message: "UPDATING user data",
        username : "nihal",
        password: "nihal123"
    })
}

export function DELETE(){
    return NextResponse.json({
        message: "DELETING user data",
        username : "nihal",
        password: "nihal123"
    })
}