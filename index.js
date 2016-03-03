var express = require('express');
var bodyParser = require('body-parser');
var db = require('./models');
var session = require('express-session');
var ejs = require('ejs');
var path = require("path");
var keygen = require('keygenerator');
var methodOverride = require('method-override');
var app = express();
var config = require('./config');

//config
app.set('view engine', 'ejs');
app.use('/static', express.static("app/public"));
app.use('/vendor', express.static("app/bower_components"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); 



//view engine
var views = path.join(process.cwd(), "views");










// creating sessions
app.use(
	session({
		//use keygen to generate a secret key
		secret: keygen._({specials: true}),
		resave: false, 
		saveUninitialized: true
	})
);

///////////////////////////////////////////////////////////////////
// extending the req object to manage sessions
app.use(function (req, res, next) {
	//login a user
	req.login = function (user) {
		req.session.userId = user._id; 
	};
	//find the current user
	req.currentUser = function (cb) {
		db.User.findOne({_id: req.session.userId }, function (err, user) {
			req.user = user; 
			cb(null, user);
		})
	};
	//logout the current user
	req.logout = function () {
		req.session.userId = null;
		req.user = null; 
	}
	//call the middleward in the stack
	next();
});
///////////////////////////////////////////////////////////////////


// api
app.get("/", function (req, res) {
  res.send(path.join(views, "index.ejs"));
});



app.get('/api/klasses', function (req, res) {
  
});

app.post('/api/klasses', function (req, res) {
  
});

app.get('/api/klasses/:id', function (req, res) {
  
});

app.put('/api/klasses/:id', function (req, res) {
  
});

app.delete('/api/klasses/:id', function (req, res) {
  
});


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
