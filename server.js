var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./app/routes/index');
var app = express();
var db = require("./models");

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/views'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', routes);


// routes

app.post('/api/criteria', function(req, res){
	console.log(req.body)
	// take the data and save it as an document (instance of that model) in the db
	db.Criteria.create(req.body, function(err, data) {
		if (err) {
			console.log(err);
		}
		console.log(data);
		res.sendStatus(200);
	});
});

var port = process.env.PORT || 8000;
app.listen(port);
console.log('The magic is happening on ' + port);


module.exports = app;
