
## Reiterating to some advanced nextjs concepts

1. folder structure ✅
2. basic routing - file based✅
3. Nested routes ✅
3. Internal redirection - within the app pages, using : 
    i. Link ✅
    ii. useRouter✅
4. ignoring routes - when we want to better organize the folder structure but don't wanna include it in routes
    - just use - (dirname)/page.tsx
5. Dynamic route✅ => [dirname]/page.tsx  ==> access using - params.dirname
6. catch all routes => [...dirname]/pages.tsx ==> "   "    - params.dirname.map
7. 404 Not found page --> create a file not-found.js, in the the app folder root.
8. Redirect - can be used for conditional routing 

9. Client and server components✅
10. layout✅
    - general layout for whole app
    - route specific layout
11. usePathname()✅
12. metaData✅
    - generateMetadata() for specific pages
13. Image optimization.✅
    -  next has inbuild image optimization, it compresses the image size significantly
    - but use <Image /> instead, not the <img/>
    - for external images, we need to specify the domain explicitely in the next.config.js/ts file.

14. Fonts used differently  ✅
    - fonts are imported 
    - created an instance, with some options
    - and directly used in the classname

15. Fetching Data : ✅
    - in client component
        - mark as "use client"
         - usual reacht comp approach - fetch data separately in a async function and wrap it inside useEffect
    - in server component :
        - fetch data in a separate function
        - directly utilize the data returned , marking even the component to be async.
        - no useEfect,
        - logs will be made only on the terminal and not on the browser, as the data is fetched server side

# Backend in Next js 
    - Routes are defined in api/hello/route.js/ts file
    - in the specific routes we export methods like GET,POST, PUT, POST, etc.
    - we get inbuilt NextRequest and NextResponse objects.
    - params from the dynamic route are automatically passed as the 2nd argument to the function


## Middleware in Nextjs
 > Middleware is simply the logic that runs before the actual request reaches a backend route handler.
 > In nextjs, Middleware : 
    - performs authentications to check if user is authorized before hitting a protected endpoint.
    - Redirect the incomin request elsewhere.
    - Also rewrite the URL internally.
    - Modify request headers and cookies.
 > Setup : 
    - Create a file middleware.js/ts in the project's root folder.
 > Various methods of middleware in Nextjs: 
    1. Allow requests --> NextResponse.next();
    2. Redirect --> NextResponse.redirect(new URL("/login", request.url))
    3. Rewrite path -->	NextResponse.rewrite(new URL('/new-path', request.url))
    4. Read/set cookies --> request.cookies.get() / response.cookies.set()
    5. Auth guard :	Check cookies or headers and redirect if unauthenticated
    6. A/B testing : Split traffic with rewrites or cookies