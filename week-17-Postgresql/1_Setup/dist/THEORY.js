"use strict";
// -- DATABASE OPERATIONS
// -- Create a Database
// CREATE DATABASE database_name;
// -- Connect to a Database
// \c database_name
// -- List Databases
// \l
// -- TABLE OPERATIONS
// -- Create a Table
// CREATE TABLE table_name (
//     column1 datatype constraints,
//     column2 datatype constraints,
//     ...
// );
// -- List Tables
// \dt
// -- Describe Table Structure
// \d table_name
// -- Drop a Table
// DROP TABLE table_name;
// -- BASIC QUERIES
// -- Insert Data
// INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);
// -- Retrieve Data
// SELECT column1, column2 FROM table_name;
// -- Update Data
// UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;
// -- Delete Data
// DELETE FROM table_name WHERE condition;
// -- FILTERING AND SORTING
// -- Filter Rows
// SELECT * FROM table_name WHERE condition;
// -- Sort Results
// SELECT * FROM table_name ORDER BY column_name ASC;
// -- Limit Results
// SELECT * FROM table_name LIMIT number;
// -- JOINS
// -- Inner Join
// SELECT * FROM table1 INNER JOIN table2 ON table1.column = table2.column;
// -- Left Join
// SELECT * FROM table1 LEFT JOIN table2 ON table1.column = table2.column;
// -- Right Join
// SELECT * FROM table1 RIGHT JOIN table2 ON table1.column = table2.column;
// -- AGGREGATION
// -- Count Rows
// SELECT COUNT(*) FROM table_name;
// -- Group By
// SELECT column, COUNT(*) FROM table_name GROUP BY column;
// -- Sum/Avg
// SELECT SUM(column), AVG(column) FROM table_name;
// -- CONSTRAINTS
// -- Add a Primary Key
// ALTER TABLE table_name ADD PRIMARY KEY (column_name);
// -- Add a Foreign Key
// ALTER TABLE table_name ADD FOREIGN KEY (column_name) REFERENCES other_table(column_name);
// -- INDEXES
// -- Create an Index
// CREATE INDEX index_name ON table_name (column_name);
// -- Drop an Index
// DROP INDEX index_name;
// -- UTILITIES
// -- Show Running Queries
// SELECT * FROM pg_stat_activity;
// -- Kill a Query
// SELECT pg_terminate_backend(pid);
// SQL INJECTION  : 
// **1. Example of Vulnerable Code (SQL Injection risk)**
// User input is directly concatenated into the query, allowing injection.
// const username = "admin' --";
// const password = "anything";
// const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
// Malicious input can bypass authentication.
// **2. Secure Code using Parameterized Queries**
// Prevents SQL Injection by treating user input as data, not code.
// const query = 'SELECT * FROM users WHERE username = $1 AND password = $2'; // Use placeholders
// const values = [username, password]; // User inputs passed as parameters
// const result = await pgClient.query(query, values); // Safely executes the query
// **3. Input Validation and Sanitization**
// Ensure user input is in the expected format and sanitize it.
// const validator = require('validator');
// if (!validator.isAlphanumeric(username)) {
// throw new Error('Invalid username');
// } // Validate input to prevent malicious characters.
// **4. Limit Database User Permissions**
// Use a dedicated database user with restricted privileges.
// Example: Use a read-only user for SELECT queries to avoid unintended changes.
// **5. Using Stored Procedures**
// Encapsulate SQL logic in the database to prevent direct query manipulation.
// SQL (in the database):
/*
CREATE PROCEDURE GetUser (IN username VARCHAR(50), IN password VARCHAR(50))
BEGIN
    SELECT * FROM users WHERE username = username AND password = password;
END;
*/
// Call it from your application:
// const query = 'CALL GetUser($1, $2)';
// const result = await pgClient.query(query, values);
// **6. Use ORM for Abstraction**
// Example with Sequelize (ORM):
// const user = await User.findOne({
// where: { username: username, password: password }
// });
// ORM generates safe queries, reducing risk of injection.
