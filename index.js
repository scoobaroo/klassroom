var config = require('./config')
var db = require('./models')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');




//config
app.use('/static', express.static("app/public"));
app.use('/vendor', express.static("app/bower_components"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// api
app.get("/", function(req, res) {
	res.sendStatus(200);
})


app.get("/test", function(req, res) {
	db.Klass.find({}, function(err, users) {
		if(err) {
			console.log(err);
		}
		else {
			res.send(klass);
		}
	});
})

// app.post(["/users", "/signup"], function signUp (req, res) {
// 	//grab the user from the params
// 	var user = req.body.user;
// 	//pull out their email and password
// 	var email = user.email;
// 	var password = user.password;
// 	//create a new user
// 	db.User.createSecure(email, password, function() {
// 		res.send(email + " is registered!");
// 	});
// });




app.listen(8000);
console.log("server on 8000");
