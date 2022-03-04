exports.serve = function (req, res) {
  var body = "";
  req.on("data", function (potongan) {
    body += potongan;
  });

  // Membaca post parameter
  req.on("end", function () {
    var param = body.split("&");
    for (var i = 0; i < param.length; i++) {
      var data = param[i].split("=");
      console.log("data " + data[0], "bernilai " + data[1]);
    }
  });

  // var bagian = req.url.split("?");

  // if (bagian.length >= 2) {
  //   // Jika lebih dari satu, maka query parameter ada
  //   var param = bagian[1].split("&");
  //   for (var i = 0; i < param.length; i++) {
  //     var data = param[i].split("=");
  //     console.log("data " + data[0], "bernilai " + data[1]);
  //   }
  // }

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("requested url: " + req.url + "\n");
};
