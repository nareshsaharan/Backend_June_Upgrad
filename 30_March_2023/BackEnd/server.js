
const express = require('express');
const ser = express();
const routes = require('./Routes/routes');
const PORT = 4000;
const cors = require('cors');
const bodyParser = require('body-parser');

ser.use(bodyParser.json());
ser.use(bodyParser.urlencoded({ extended: true }));


ser.use(cors());

ser.use('/', routes.user);

ser.listen(PORT, ()=> console.log(`server is running at port: ${PORT}`));

