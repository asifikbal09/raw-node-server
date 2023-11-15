const fs = require("fs")

//read the file text
const readText = fs.readFileSync('./text/read.txt',"utf-8")

//write the file text
const writtenText = fs.writeFileSync("./text/write.txt", readText+"My name is Asif")

console.log(readText);