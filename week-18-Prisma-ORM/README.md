
- Intro to Prisma - a popular ORM, making it easier to interact with sql databases

- setup : 
    - initialize an empty node typescript project
    - npm init -y  >>  npm i typescript >> npx tsc --init  >> change rootdir and ourdir in tsconfig.json
    - add srcipts to compile and run 
    
    - npm i prisma
    - npm prisma init > create prisma/schema.prisma file
    - add db url to .env file 

    - Now good to go : 
        - create DB models in the schema.prisma file  >> migrate the changes by - [npx prisma migrate dev], and the table will be created 
        - To insert values : 
            - [npx prisma generate dev], creates a client file to @prisma/client that has all the logic that converts prisma query to raw sql querie
            - just import {Prisma client} from "@prisma/client"
            - start inserting values using prisma autocomplete suggestions
            - expressify it