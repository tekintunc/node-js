const fs = require("fs")

// fs.readFile("file.txt", "utf8", (err ,data)=>{
//     if(err){
//         console.log(err)
//     }else {
//         console.log(data)
//     }

// } )
// const newContent ="New Content was added!!!"
// fs.writeFile("My-file.txt", newContent,"utf-8", (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("test is writen.")
//     }
// }) 
fs.unlink("file.txt",(err) => {
    if(err) {
        console.log("Hata oluştu")
    } else {
        console.log("Dosya silindi")
    }
}) 