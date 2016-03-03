var mongoose = require("mongoose");
// adding a mongo connection
mongoose.createConnection("mongodb://localhost/klassroom");

module.exports.User = require("./user");
module.exports.Klass = require("./klass");