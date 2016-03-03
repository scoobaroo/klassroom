mongoose = require('mongoose');
//New Schema object
var Schema = mongoose.Schema;

var KlassSchema = new Schema ({
	name: {type: String},
	createdAt: {type: Date, default: Date.now()}
});

//Registering a model to mongoose.  arg1 is name and arg2 is schema.
var Klass = mongoose.model('Klass', KlassSchema);
module.exports = Klass;

