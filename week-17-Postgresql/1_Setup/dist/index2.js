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
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient = new pg_1.Client({
    connectionString: "postgresql://neondb_owner:hNXOdJvL4iE6@ep-silent-bush-a5bk16d3.us-east-2.aws.neon.tech/neondb?sslmode=require",
});
function ConnectToDb() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield pgClient.connect();
            console.log("Connected to the database!");
        }
        catch (error) {
            console.error("Error connecting to the database:", error);
        }
    });
}
ConnectToDb();
app.post("/todos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, isdone } = req.body;
    yield pgClient.query(`CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY,
        title VARCHAR(50),
        description VARCHAR(100),
        isdone BOOLEAN
        );
        `);
    console.log("done with table creation!");
    // NOT RECOMMENDED SYNTAX - it makes the database prone to sql injection
    // await pgClient.query(`INSERT INTO todos (title, description, isdone) VALUES('${title}','${description}','${isdone}');`)
    // RECOMMENDED SYNTAX : 
    yield pgClient.query(`INSERT INTO todos (title, description, isdone) VALUES($1, $2, $3);`, [title, description, isdone]);
    console.log("inserted!");
    const table = yield pgClient.query("SELECT * FROM todos");
    console.log("selected!");
    res.json({
        msg: "todo create successfully!",
        data: table.rows
    });
}));
app.listen(3000, () => {
    console.log("Server listening at port 3000!");
});
