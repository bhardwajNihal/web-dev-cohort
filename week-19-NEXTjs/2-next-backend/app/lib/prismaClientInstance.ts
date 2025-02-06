import { PrismaClient } from "@prisma/client";

//ISSUE : too many db connection instances, arising on each compile, may result in app failure
        // happen only in case when running project locally and the db is at the cloud

// this line will initialize the prismaClient instance for the very 1st time, 
// and for each subsequent request will use the same instance stored in globalThis.prisma
// by this way, will avoid issues of creating too many connections 
const prisma =  globalThis.prisma ?? new PrismaClient()

//this line will store the very 1st db connection instance in the globalThis.prisma
if(process.env.NODE_ENV !== "production") globalThis.prisma = prisma            //as this isn't an issue at production, it will check and only initialize global variable otherwise

export default prisma 