
import { NextRequest,NextResponse } from "next/server";

//standard middleware definition
export default function Middleware(request:NextRequest){

    //logging the path
    console.log("req url : ", request.url);         // plain url
    console.log("next url : ", request.nextUrl);    // object
    
    
    // access methods :
        // const url = request.nextUrl;    //
        // const pathname = url.pathname;
        // console.log("url : ",url.href );    
        // console.log("pathname : ",pathname);
        
        // const cookie = request.cookies.get('token');
        // const header = request.headers.get('user-agent');


    // checking if user is logged in on visiting a protected route
    // if not redirecting to /login
    const isLoggedIn = request.cookies.get("token");
    if(!isLoggedIn){
        new URL("/login", request.url)
        // Middleware requires absolute URLs for redirection to work properly.       
        // It needs to know the base (domain + protocol), which is provided by request.url.
        // This builds an absolute URL (like https://yourdomain.com/login).
        return NextResponse.redirect(new URL("/login", request.url))    // unlike client side code, it doesn't have direct access to the url, so as to just navigate("/")
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