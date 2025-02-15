

// Why backend in nextjs: 
- Single codebase for all your codebase
- No cors issues, single domain name for your FE and BE
- Ease of deployment, deploy a single codebase
- All standard things you get in a backend framework like express
- Server components can directly talk to the backend


//setup a nextjs project 
 - all frontend routes are in folder_name/page.tsx
 - all backend route are in api/route.ts file


// Define the route handlers - GET, POST, PUT, DELETE, using the inbuilt NextRequest and NextResponse attributes

// make signup and signin routes and connect to the backend 

// Connect to DB : 
    - npm i prisma > npx prisma init
    - define schema
    - put DB url in the .env file
    - migrate the DB - npx prisma migrate dev --name init_schema  => to apply the schema changes to the database
    - npx prisma generate, to generate the client to talk to the db
    - finally, do CRUD on the db, using prismaClient



#  Database Connection: Next.js vs. Standard Node.js Backend

    # Standard Node.js Backend + React Frontend  
        - Backend (Node.js/Express) handles database connection.
        - React frontend fetches data via API requests.  

    # In nextjs app
        - No separate backend needed; API routes handle DB queries.
        - DBconnection function is called inside each backend route.
        - To avoid duplicate connection just define the singleton client, which takes care that if the connection is eshtablised once, just use that connection in the subsequent requests instead on creating a new one.
        - Can also Fetch database data without API calls, directly in components.