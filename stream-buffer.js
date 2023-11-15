var http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/read-file" && req.method === "GET");

  const readableStream = fs.createReadStream(process.cwd() + "/text/read.txt");

  readableStream.on("data", (buffer) => {
    res.write(buffer);
  });

  readableStream.on("end", () => {
    res.end("hello world");
  });
});

server.listen(5000, () => {
  console.log("This server is running on port 5000");
});
