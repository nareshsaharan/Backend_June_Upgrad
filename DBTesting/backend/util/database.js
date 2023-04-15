import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database:'todo_schema',
    password: 'root@123'
});

export default pool.promise();