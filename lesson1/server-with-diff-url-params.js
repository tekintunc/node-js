const http = require('node:http');
const url = require("node:url")

const hostname = '127.0.0.1';
const port = 3001;

const users = [
    { id: 1, name: "Huseyin" },
    { id: 2, name: "Ferhat" },
    { id: 3, name: "Tekin" },
]

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url)
    // {
    //   protocol: 'http:',
    //   hostname: 'example.com',
    //   pathname: '/home',
    //   query: { user: 'test' },
    // }
    const pathname = parsedUrl.pathname

    console.log("pathname", pathname)

    if (pathname === "/favicon.ico") {
        res.statusCode = 204; // 204 No Content
        res.end();
        return;
    }

    if (pathname === "/users") {
        console.log("0. log")
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(users));
        return;
    }

    console.log("pathname.startsWith", pathname.startsWith("/users/"))

    if (pathname.startsWith("/users/")) {
        console.log("1. log")
        const userId = Number(pathname.split("/")[2])
        const user = users.find(user => user.id === userId)

        console.log(user)

        if (user) {
            console.log("2. log")
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(user));
        } else {
            console.log("3. log")
            res.setHeader('Content-Type', 'text/plain');
            res.end('User not found!!!');
        }
        // return;
    } else {
        console.log("4. log")
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not found!!!');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});