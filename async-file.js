const fs = require("fs");

// asynchronous reading
fs.readFile("./text/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("Error reading text");
  }
  console.log(data);
  fs.writeFile("./text/write2.txt",data,"utf-8",(err)=>{
    if(err){
        throw Error("Error writing data")
    }
  });
});
