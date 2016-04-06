var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var criteriaSchema = new Schema({
	c1Name:String,
	c2Name:String,
	c3Name:String,
	c4Name:String
});
var Criteria = mongoose.model("Criteria", criteriaSchema);

module.exports = Criteria