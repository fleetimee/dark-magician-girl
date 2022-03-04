var http = require("http");

function handle(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World\n");
}

http.createServer(handle).listen(1000, "localhost");
console.log("Server running at http://localhost:1000/");
