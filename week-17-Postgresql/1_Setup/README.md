Why SQL?
    - SQL databases have a strict schema. They require you to
    - Define your schema
    - Put in data that follows that schema
    - Update the schema as your app changes and perform migrations
 
So there are 4 parts when using an SQL database (not connecting it to Node.js, just running it and putting data in it)
    1. Running the database.
    2. Using a library that let’s you connect and put data in it.
    3. Creating a table and defining it’s schema.
    4. Run queries on the database to interact with the data (Insert/Update/Delete)


- Basic setup of a node, TS project, and connecting it to the postgresql db 
    - npm init -y 
    - npm i typescript > npx tsc --init > change the root and outdir in the ts config.json file
    - npm i pg @types/pg (installing the package to enable commuticating node express backend to db, and its type definition file)