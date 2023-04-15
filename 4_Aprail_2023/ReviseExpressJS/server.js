const express = require('express');
const ser = express();
const bp = require('body-parser');
const PORT = 5678;


ser.use(bp.json());
ser.use(bp.urlencoded({ extended: true }));

let arr = [{
    id : 1,
    name : "Naresh"
},
{
    id : 2,
    name : "Sagar"
},
{
    id : 3,
    name : "Mahima"
}
]

ser.get('/', (req, res)=>{
    res.send(arr);
})

ser.post('/', (req, res) => {
    arr.push(req.body);
    res.send({"message":"Data send sucessfully"});
})


ser.delete('/', (req, res) => {
    //console.log(req.query);
    let id = req.query.id;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].id == id) {
            let currObj = {"obj": arr[i]};
            arr.splice(i,1);
            res.send(currObj);
        }
    }

    res.send({"message":`${id} is not present`});
})


ser.use('/',(req, res)=>{
    res.send("<h1 style = 'text-align:center'>404 Page</h1>")
})



ser.listen(PORT, ()=> console.log('server is running at port:',PORT));





