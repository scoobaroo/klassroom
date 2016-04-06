var mongoose = require("mongoose");
// use mongolab for heroku when in production
mongoose.connect("mongodb://localhost/klassroom");

module.exports.Criteria = require('./criteria');




