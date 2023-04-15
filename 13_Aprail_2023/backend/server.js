const express = require('express');
const ser = express();
const cors = require('cors');
const bp = require('body-parser');
const PORT = 4000;
const todo = require('./Routes/todo');
const mongoose = require('mongoose');




ser.use(bp.json());
ser.use(bp.urlencoded({ extended: true }));

ser.use(cors());
ser.use('/', todo);



const CONNECTION_URL = "mongodb+srv://nareshsaharan2016:Naresh123@cluster0.mzwtkil.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> ser.listen(PORT, ()=> console.log(`server is running at PORT: ${PORT}`)))
.catch((err) => console.log(err.message)); 




