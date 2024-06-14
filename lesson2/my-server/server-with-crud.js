const http = require('node:http');
const url = require("node:url")

const hostname = '127.0.0.1';
const port = 3000;

const users = [
    { id: 1, name: "Huseyin" },
    { id: 2, name: "Ferhat" },
    { id: 3, name: "Tekin" },
]

const server = http.createServer((req, res) => {
    /**
     * Cors Settings
     */
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, DELETE, PUT',
        'Access-Control-Max-Age': 2592000,
        'Access-Control-Allow-Headers': 'content-type, X-Requested-With'
    }

    const parsedUrl = url.parse(req.url)
    const pathname = parsedUrl.pathname
    const method = req.method

    if (method == "OPTIONS") {
        res.writeHead(204, { ...headers, 'Content-Type': 'application/json' });
        res.end()
        return;
    }

    if (method === "GET" && pathname === "/users") {
        res.writeHead(200, { ...headers, 'Content-Type': 'application/json' })
        res.end(JSON.stringify(users));
    } else if (method === "GET" && pathname.startsWith("/users/")) {
        const userId = Number(pathname.split("/")[2])
        const user = users.find(user => user.id === userId)
        if (user) {
            res.writeHead(200, { ...headers, 'Content-Type': 'application/json' })
            res.end(JSON.stringify(user));
        } else {
            res.writeHead(404, { ...headers, 'Content-Type': 'text/plain' })
            res.end("User not found!!!")
        }
    } else if (method === "POST" && pathname === "/users") {
        let body = ""
        req.on("data", chunk => {
            body += chunk.toString()
        })
        req.on("end", () => {
            const newUser = JSON.parse(body)
            users.push(newUser)
            res.writeHead(201, { ...headers, 'Content-Type': 'application/json' })
            res.end(JSON.stringify(newUser));
        })
    } else if (method === "PUT" && pathname.startsWith("/users/")) {
        const userId = Number(pathname.split("/")[2])
        let body = ""
        req.on("data", chunk => {
            body += chunk.toString()
        })
        req.on("end", () => {
            const updatedUser = JSON.parse(body)
            console.log("updatedUser", JSON.parse(body))
            let userIndex = users.findIndex(user => user.id === userId)
            if (userIndex !== -1) {
                users[userIndex] = updatedUser
                res.writeHead(200, { ...headers, 'Content-Type': 'application/json' })
                res.end(JSON.stringify(updatedUser));
            } else {
                res.writeHead(404, { ...headers, 'Content-Type': 'text/plain' })
                res.end("User not found!!!")
            }
        })
    } else if (method === "DELETE" && pathname.startsWith("/users/")) {
        const userId = Number(pathname.split("/")[2])
        let userIndex = users.findIndex(user => user.id === userId)
        if (userIndex !== -1) {
            users.splice(userIndex, 1)
            res.writeHead(204, headers)
            res.end();
        } else {
            res.writeHead(404, { ...headers, 'Content-Type': 'text/plain' })
            res.end("User not found!!!")
        }
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});