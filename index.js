var config = require('./config')
var db = require('./db')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');




//config
app.use('/static', express.static("app/public"));
app.use('/vendor', express.static("app/bower_components"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());






app.listen(8000);
console.log("server on 8000");
