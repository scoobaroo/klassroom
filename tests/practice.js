var db = require('../models');

db.klass.insert({name: "class4"});


var db = require('../models'); db.Klass.find({}, function(err, klass) { console.log(klass); });

var db = require('./models'); db.Klass.create({name: "class5"});


var db = require('./models'); db.Klass.create({name: "whatever"}, function(err, klass){ console.log(klass); });
	
db.Klass.find({}, function(err, klasses){ console.log(klasses); });