const express = require("express")
const app = express()

const hostname = "127.0.0.1"
const port = 3000

const users = [
    {id :1, name: "Mehmet"},
    {id :2, name: "Ahmet"},
    {id :3, name: "Ali"},
    {id :4, name: "Dali"},
    {id :5, name: "Mali"},
]

app.get("/users", (req,res)=>{
    res.status(200).send(users)
})

app.get("/users/:id", (req,res)=>{
    const userId = Number(req.params.id)
    const user = users.find((user => user.id === userId))   

        if (user) {   
            res.status(200).send(user);
        } else {        
            
            res.status(404).send({ message:'User not found!!!'});
        }    
})

app.use((req, res) => {
    res.status(404).send({ message:' Not found!!!'});
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})



