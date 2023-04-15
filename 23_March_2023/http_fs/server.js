const http = require('http');

const PORT = 3000;

const arr = [
    {name : "Naresh"},
    {lang : "Java"}
]


const ser = http.createServer((req, res) => {

    if(req.url === "/" ) {

        res.writeHead(200, {'Content-Type' : 'text/html'});

        res.write('<form action = "/home" method = "POST"> <input type = "text" name = "inputValue" > <button type = "submit"> Add </button> </form>');
        res.end();

    }else if (req.url === "/home") {
        const bodyData = [];
        let parseData = "";
        req.on('data', (chunk) => {
            bodyData.push(chunk);
        });
        
        req.on('end', () => {
            parseData = Buffer.concat(bodyData).toString();
            console.log(parseData);
            res.end(`My name is ${parseData.split("=")[1]}`);
        });
        
        //console.log(parseData);
        //res.end(`My name is`);
        
    } else if(req.url === "/about") {
        res.write('<h1> Hello From About </h1>');
        res.end();
    }else {
        res.write('<h1> 404 Page </h1>');
        res.end();
    }

});



ser.listen(PORT, ()=> {
    console.log(`Server is running at Port: ${PORT}`);
});


