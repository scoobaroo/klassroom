var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
//New Schema object
var Schema = mongoose.Schema;

//Schema definition
var UserSchema = new Schema({
	email: {type: String, required: true},
	passwordDigest: {type: String, required: true}, 
	createdAt: {type: Date, default: Date.now()} 
});

//statics are methos that are available to the constructor
UserSchema.statics.createSecure = function (email, password, callback) {
	//'that' references our User schema
	var that = this;
	//generate some salt
	bcrypt.genSalt(function (err, salt) {
		//hash the password with salt
		bcrypt.hash(password, salt, function (err, hash) {
			//build user object
			var user = {
				email: email, 
				passwordDigest: hash
			};
			// create a new user in the db with the hashed password and execute callback when done
			that.create(user, callback);
		});
	});
};

//authenticeate the user (for login)
UserSchema.statics.authenticate = function(email, password, callback) {
	//find some user by email entered at login
	this.findOne({email: email}, function (err, user) {
		if (user === null) {
			callback("Sorry! I can\'t a user with that email", null);
		}
		else if (user.checkPassword(password)) {
			callback(null, user);
		}
		else {
			//username found but password is incorrect
			callback("Password is incorrect", user)
		}
	});
};

// compare password user enters with hashed password (`passwordDigest`)
UserSchema.methods.checkPassword = function (password) {
  // run hashing algorithm (with salt) on password to compare with stored `passwordDigest`
  // `compareSync` is like `compare` but synchronous
  // returns true or false
  return bcrypt.compareSync(password, this.passwordDigest);
};


//Register schema to Mongoose
var User = mongoose.model('User', UserSchema);

//export user model
module.exports = User;