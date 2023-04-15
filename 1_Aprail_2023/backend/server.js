const express = require('express');
const ser = express();
const cors = require('cors');
const bp = require('body-parser');
const PORT = 4000;
const todo = require('./Routes/todo');



ser.use(bp.json());
ser.use(bp.urlencoded({ extended: true }));

ser.use(cors());
ser.use('/', todo);

// async function testOurDatabase() {
//    const[rows, fields] = await db.execute('DELETE FROM todo_table WHERE id =1');
//    console.log(rows);
// }

// testOurDatabase();

ser.listen(PORT, ()=> console.log(`server is running at PORT: ${PORT}`));




