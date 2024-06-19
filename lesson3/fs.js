// const fs = require("fs")

// fs.readFile("file.txt", "utf8", (err, data) => {
//     if (err) {
//         console.log("Error: ", err)
//     } else {
//         console.log("Data: ", data)
//     }
// })

// const newContent = "New Content was added!!!"
// fs.writeFile("file.txt", newContent, "utf-8", (err) => {
//     if (err) {
//         console.log("Error: ", err)
//     } else {
//         console.log("Text is written!!")
//     }
// })

// const newContent = "New Content was added!!!"
// fs.writeFile("my-file.txt", newContent, "utf-8", (err) => {
//     if (err) {
//         console.log("Error: ", err)
//     } else {
//         console.log("Text is written!!")
//     }
// })

// const newContent = [
//     { id: 1, name: "huseyin" },
//     { id: 2, name: "orkun" }
// ]
// fs.writeFile("my-data.json", JSON.stringify(newContent, null, 10), "utf-8", (err) => {
//     if (err) {
//         console.log("Error: ", err)
//     } else {
//         console.log("Text is written!!")
//     }
// })

// const isExistFile = fs.existsSync("file.txt")
// console.log(isExistFile)

// fs.unlink("file.txt", (err) => {
//     if (err) {
//         console.log("Hata")
//     } else {
//         console.log("Dosya silindi!!!")
//     }
// })

// const newContent = "Second line!!!"
// fs.appendFile("file.txt", newContent, "utf8", (err) => {
//     if (err) {
//         console.log("Hata")
//     } else {
//         console.log("Dosyaya ekleme islemi yapildi!")
//     }
// })

// fs.rename("file.txt", "file-changed.txt", (err) => {
//     if (err) {
//         console.log("Hata")
//     } else {
//         console.log("Dosyaya ismi guncellendi!")
//     }
// })

// fs.mkdir("new-folder-2", (err) => {
//     if (err) {
//         console.log("Hata")
//     } else {
//         console.log("Klasor olusturuldu!")
//     }
// })

// fs.rmdir("new-folder-2", (err) => {
//     if (err) {
//         console.log("Hata")
//     } else {
//         console.log("Klasor silindi!")
//     }
// })

// fs.rm("new-folder", { recursive: true, force: true }, (err) => {
//     if (err) {
//         console.log("Hata")
//     } else {
//         console.log("Klasor silindi!")
//     }
// })

// fs.readdir("/Users/huseyintkt/Downloads", (err, data) => {
//     if (err) {
//         console.log("hata")
//     } else {
//         console.log(data)
//     }
// })

// fs.copyFile("file.txt", "xxx/file.txt", (err) => {
//     if (err) {
//         console.log("hata")
//     } else {
//         console.log("Dosya kopyalandi!")
//     }
// })