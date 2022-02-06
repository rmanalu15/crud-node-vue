import mysql from "mysql2";

// Connection to database.
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'RS_AQIDAH10',
    database: 'development'
});

export default db;