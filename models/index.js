var mongoose = require("mongoose");
// adding a mongo connection
mongoose.connect("mongodb://localhost/klassroom");

module.exports.User = require("./user.js");
module.exports.Klass = require("./klass.js");