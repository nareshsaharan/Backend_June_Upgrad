const fs = require('fs');

// write in a file
fs.writeFile('data.txt', "Some testing data", (err) => {
    if(err) {
        console.log(err.message);
    }
});

// reading in a file
fs.readFile('data.txt', 'utf8',(err, data) => {
    if(err) {
        console.log(err.message);
    }else {
        console.log(data);
    }
});

// append some data
fs.appendFile('data.txt', "Some more content",(err) => {
    if(err) {
        console.log(err.message);
    }
});



