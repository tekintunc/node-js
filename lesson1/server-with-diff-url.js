const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;

    console.log("req", req)
    console.log("reqUrl", req.url)

    if (req.url === "/text") {
        res.setHeader('Content-Type', 'text/plain');
        res.end('First Lesson');
    } else if (req.url === "/json") {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify([{ id: 1, name: "Tekin" }]));
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});