var express = require("express");
var bodParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();

app.listen('3000', function(){
  console.log("Listening for localhost 3000")
})
