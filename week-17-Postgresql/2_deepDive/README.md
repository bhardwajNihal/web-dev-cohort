
Understanding some advanced Sql database concepts : 

- Relationships : 
    - When a table is connected to some other table, via a column(foreign key), having attributes of another table's primary key, then a Relationship is eshtablished between them.

- Transactions : 
    - Wrapping a series of queries within a transaction makes sure that either all of them executes successfully or non of them occurs. 
    - the sequence of operations are treated as a single unit
    - ex : 
      - BEGIN; -- Start a transaction
        INSERT INTO users (name) VALUES ('Alice');
        INSERT INTO orders (user_id, item, amount) VALUES (1, 'Book', 12.99);
        COMMIT; -- Save changes

- Joins : Joins combine rows from two or more tables based on a related column.
    - help gets data from two tables, in a single query.
    - ex : 
        // Inner Join (Only users with orders)
            SELECT users.name, orders.item, orders.amount
            FROM users
            INNER JOIN orders ON users.id = orders.user_id;

        // Left Join (All users, even those without orders)
            SELECT users.name, orders.item, orders.amount
            FROM users
            LEFT JOIN orders ON users.id = orders.user_id;

