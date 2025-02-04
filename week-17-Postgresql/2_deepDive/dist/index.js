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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pg_1 = require("pg");
const pgClient = new pg_1.Client("postgresql://neondb_owner:hNXOdJvL4iE6@ep-silent-bush-a5bk16d3.us-east-2.aws.neon.tech/neondb?sslmode=require");
function ConnectToDb() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield pgClient.connect();
            console.log("db connected successfully!");
        }
        catch (error) {
            console.log("error connecting Db", error);
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // creating a users table, an addresses table
        // Establishing Relationship between them
        yield pgClient.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100)UNIQUE NOT NULL,
        password VARCHAR(50) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
        `);
        console.log("User's table created!");
        // Creating an Addresses table, with user_id as a foriegn key, means it refers to the users table, and address of that user_id can't be added whose corresponding primary key is not present in the users table 
        yield pgClient.query(`
        CREATE TABLE IF NOT EXISTS addresses(
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        pincode VARCHAR(20), 
        CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
        );
        `);
        console.log("Addresses table also created!");
    });
}
ConnectToDb();
main();
// Creating an express route for user signup
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, city, country, pincode } = req.body;
    // TRANSACTION initiation : Makes sure either all of the operations are successfully done, or none of it happens
    pgClient.query(`BEGIN`);
    // Inserting values into user's table
    const response = yield pgClient.query(`INSERT INTO USERS(name, email, password) VALUES($1,$2,$3) RETURNING id`, [name, email, password]); // returns id, to be used as foriegn key in the addresses table
    // console.log(response);
    const userID = response.rows[0].id;
    console.log("User values inserted!");
    // Inserting values into addresses table
    yield pgClient.query(`INSERT INTO addresses(user_id, city, country, pincode) VALUES($1,$2,$3,$4)`, [userID, city, country, pincode]);
    console.log("Addressess Values inserted!");
    pgClient.query('COMMIT');
    res.json({
        msg: "Values inserted!"
    });
}));
// JOINS : gives a way to fetch two tables, at once using a single query
app.get("/userdata", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.query.id;
    // getting data of same user, using two different queries
    // const userResponse = await pgClient.query(`SELECT * FROM users WHERE id=$1`,[userId]);
    // const addressesResponse = await pgClient.query(`SELECT * FROM addresses WHERE user_id=$1`,[userId]);
    // getting data in a single query, using JOINS
    const userData = yield pgClient.query(`
            SELECT users.id, users.name, users.email, addresses.city, addresses.country, addresses.pincode
            FROM users JOIN addresses ON users.id = addresses.user_id WHERE users.id=$1
            `, [userId]);
    res.json({
        userData: userData.rows[0],
    });
}));
app.listen(3000, () => {
    console.log("server listening at port 3000");
});
