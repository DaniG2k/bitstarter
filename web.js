var express = require('express');
var fs = require("fs");
var filename = "index.html";
var data = fs.readFileSync(filename, "utf8");
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
