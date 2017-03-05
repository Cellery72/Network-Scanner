var express = require('express');
var app = express();
var port = 9002;
var scanner = require('./scanner').Scanner;

scanner.scanNetwork();

app.listen(port);
console.log("Listening on port " + port);