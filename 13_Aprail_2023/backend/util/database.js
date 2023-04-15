const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'todo_schema',
    password: 'root@123'
});

module.exports =  pool.promise();