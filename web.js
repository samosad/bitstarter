var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var readIndex = function() {
  return fs.readFileSync("index.html").toString();
};

app.get('/', function(request, response) {
  response.send(readIndex());
  // response.send('Hello World2!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
