var http = require("http");
var static = require("node-static");
var file = new static.Server();

function handle(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World\n");
}

function statis(req, res) {
  file.serve(req, res);
}

http.createServer(statis).listen(1000, "localhost");
console.log("Server running at http://localhost:1000/");
