const express = require('express');
const router = express.Router();

const arr = [
    {   name : "Naresh",
        lang : "Java"
    },
    {   name : "Sagar",
        lang : "Cpp"
    },
]

router.get('/', (req, res)=> {
    res.send(arr);
})

router.patch('/', (req, res)=> {
    
    console.log(req.body);
    res.send(arr);
    //res.redirect('/');
    
})

router.get('/:id', (req, res)=> {
    console.log(req.params);
    console.log(req.body);
    res.send(arr[req.params.id - 1]);
})

router.get('/Home', (req, res) => {
    res.send("Hello from Home");
})

router.get('/footer', (req, res) => {
    res.send("Hello from footer");
})

// module.exports = router;

module.exports.user = router;


