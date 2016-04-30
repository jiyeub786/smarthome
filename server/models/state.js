var mongoose = require('mongoose');

Schema = mongoose.Schema;
 
var stateSchema = new Schema({
	_id:{type: Number },
	device: { type : String },
	values : {type: String, default : "OFF"},
		
});







 module.exports = mongoose.model('dev',stateSchema);
