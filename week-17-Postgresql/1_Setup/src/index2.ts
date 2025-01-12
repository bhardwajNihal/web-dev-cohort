import { Client } from 'pg';
import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

const pgClient = new Client({
  connectionString: "postgresql://neondb_owner:hNXOdJvL4iE6@ep-silent-bush-a5bk16d3.us-east-2.aws.neon.tech/neondb?sslmode=require",
});

async function ConnectToDb() {
  try {
    await pgClient.connect();
    console.log("Connected to the database!");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}
ConnectToDb();

app.post("/todos", async(req:Request, res:Response) => {

    const {title, description, isdone} = req.body;

    await pgClient.query(`CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY,
        title VARCHAR(50),
        description VARCHAR(100),
        isdone BOOLEAN
        );
        `)


    console.log("done with table creation!");

// NOT RECOMMENDED SYNTAX - it makes the database prone to sql injection
    // await pgClient.query(`INSERT INTO todos (title, description, isdone) VALUES('${title}','${description}','${isdone}');`)


// RECOMMENDED SYNTAX : 
    await pgClient.query(`INSERT INTO todos (title, description, isdone) VALUES($1, $2, $3);`,
      [title, description, isdone]
    )


    console.log("inserted!");
    
    const table = await pgClient.query("SELECT * FROM todos")

    console.log("selected!");
    

    res.json({
        msg: "todo create successfully!",
        data: table.rows
    })

})

app.listen(3000, () => {
  console.log("Server listening at port 3000!");
});
