var mongoose = require('mongoose');

//New Schema object
var Schema = mongoose.Schema;

//Schema definition
var UserSchema = new Schema({
	email: String,
	password: String
});

//Register schema to Mongoose
var User = mongoose.model('User', UserSchema);
module.exports = User;