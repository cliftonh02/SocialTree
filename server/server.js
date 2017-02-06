var express = require("express");
var bodParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();

var mongoose.connect('mongodb://localhost:27017/SocialTree');

app.use('/app' express.static(__dirname, + "/app"));
app.use('node_modules', express.static(__dirname + "/node_modules"));

app.get('/', function(req, res){
  res.send('index.html');
})

app.listen('3000', function(){
  console.log("Listening for localhost 3000");
});
