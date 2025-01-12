"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// step 1 : importing the client
const pg_1 = require("pg");
// step 2 : initialize a fresh client using the db credentials
// const pgClient = new Client({
//     user : "neondb_owner",
//     password : "hNXOdJvL4iE6",
//     port : 5432,
//     host : "ep-silent-bush-a5bk16d3.us-east-2.aws.neon.tech",
//     database : "neondb",
//     ssl: true
// })
// OR
// connecting using the connection string
const pgClient = new pg_1.Client("postgresql://neondb_owner:hNXOdJvL4iE6@ep-silent-bush-a5bk16d3.us-east-2.aws.neon.tech/neondb?sslmode=require");
function ConnectToDb() {
    return __awaiter(this, void 0, void 0, function* () {
        yield pgClient.connect();
        console.log("db connected successfully!");
    });
}
// BASIC SQL QUERIES :
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // SELECTION
        // const response = await pgClient.query("SELECT * FROM users");
        // UPDATION
        // const response = await pgClient.query("UPDATE users SET username = 'nidhi' WHERE id=1")
        // CREATION
        yield pgClient.query(`CREATE TABLE IF NOT EXISTS todos(
                id SERIAL PRIMARY KEY,
                title VARCHAR(50),
                description VARCHAR(100),
                isdone BOOLEAN
                );
                `);
        console.log("done with table creation!");
        // INSERTION 
        yield pgClient.query("INSERT INTO todos (title, description, isdone) VALUES('go to gym', 'go to gym daily', 'false')");
        console.log("done with value insertion!");
        // SELECTION
        const response = yield pgClient.query("SELECT * FROM todos");
        console.log("items selected!");
        console.log(response.rows);
        // // UPDATION
        // const update = await pgClient.query("UPDATE todos SET title='Learn Postgresql', description='learn fast' WHERE id ='2'")
        // console.log(update);
        // // DElETION
        // await pgClient.query("DELETE FROM todos")
        // console.log("table deleted!");
    });
}
ConnectToDb();
main();
