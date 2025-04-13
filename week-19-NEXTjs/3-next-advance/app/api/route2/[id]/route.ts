import { NextRequest, NextResponse } from "next/server";

interface paramsType{
    params : {id : string}
}
//This second argument is automatically passed by Next.js when using dynamic API routes
// contains route params like id, which is later destructured.
export function GET(_:NextRequest, {params}:paramsType){

    const {id} = params
    return NextResponse.json({id : id})
    
}