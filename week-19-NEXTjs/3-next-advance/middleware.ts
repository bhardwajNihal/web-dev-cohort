
import { NextRequest,NextResponse } from "next/server";

//standard middleware definition
export function Middleware(request:NextRequest){

    //logging the path 
    console.log("request url : ", request.nextUrl.pathname);

    // access methods :
        // const url = request.nextUrl;    //
        // const pathname = url.pathname;
        // const cookie = request.cookies.get('token');
        // const header = request.headers.get('user-agent');


    // checking if user is logged in on visiting a protected route
    // if not redirecting to /login
    const isLoggedIn = request.cookies.get("token");
    if(!isLoggedIn && request.nextUrl.pathname.startsWith("/dashboard")){
        return NextResponse.redirect(new URL("/login", request.url))
    }

    // if Authenticated >> passing control to the next function or route handler
    return NextResponse.next();
}

//Lastly, need to define what paths middleware should run on
    export const config = {
        matcher: ['/dashboard/:path*', '/admin/:path*']
    } 


// Notes : 
    // We can't read request.body in middleware (Edge limitation).
    // Middleware should be fast and light.
    // Runs on every page load, even if client navigates (on refresh, hard loads).
    // Doesn't have access to DOM or window — it’s server-side.