import express from 'express';
const ser = express();
import cors from 'cors';
import bp from 'body-parser';
const PORT = 4000;
import todo from './Routes/todo.js';


ser.use(bp.json());
ser.use(bp.urlencoded({ extended: true }));

ser.use(cors());

ser.use('/', todo);

ser.listen(PORT, ()=> console.log(`server is running at PORT: ${PORT}`));




