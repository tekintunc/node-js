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
    const parsedUrl = url.parse(req.url)   
    const pathname = parsedUrl.pathname
    const methot =req.method
    console.log("pathname", pathname)
    console.log("parsedUrl", parsedUrl)
    console.log("parsedUrl", parsedUrl)
    
    
    if(methot=== "GET" && pathname === "/users"){
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(users));
    } else if (methot==="GET" && pathname.startsWith("/users/")){
        const userId = Number(pathname.split("/")[2])
        const user = users.find(user => user.id === userId)
        if(user){
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(user));
        }else {
            res.statusCode = 404
            res.setHeader('Content-Type', 'text/plain');
            res.end('User not found!!!');
        } 

     } // else if (methoot === "POST" && pathname === "/users") {
    //     let body = ""
    //     req.on("data",chunk =>{
    //         body += chunk.toString()
    //     })

    // }
    
     
   
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});