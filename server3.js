var http = require("http");
var static = require("node-static");
var file = new static.Server();

var url = require("url");

var proses1 = require("./proses1.js");
var proses2 = require("./proses2.js");
var queryparam = require("./queryparam.js");
var postparam = require("./postparam.js");

// function handle(req, res) {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello World\n");
// }

function semua(req, res) {
  if (url.parse(req.url).pathname == "/proses1") {
    proses1.serve(req, res);
  } else if (url.parse(req.url).pathname == "/proses2") {
    proses2.serve(req, res);
  } else if (url.parse(req.url).pathname == "/queryparam") {
    queryparam.serve(req, res);
  } else if (url.parse(req.url).pathname == "/postparam") {
    postparam.serve(req, res);
  } else {
    file.serve(req, res);
  }
}

http.createServer(semua).listen(1000, "localhost");
console.log("Server running at http://localhost:1000/");
