const http = require('http');
const PORT = 4567;

const ser = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write("<form> <input type='text' > <button type = 'submit' > send </button> </form>");
    console.log(req.url);
    res.end();
});

ser.listen(PORT);
