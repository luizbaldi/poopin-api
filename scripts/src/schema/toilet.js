var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

module.exports = new Schema({
	_id         : {type: Schema.ObjectId},
	userId      : {type: Schema.ObjectId},
	description : String, 
    address 	: String, 
    city 		: String, 
    state 		: String, 
    country 	: String, 
    lat 		: String, 
    lng 		: String,
    avaliations : [{ 
    	toiletId    : {type: Schema.ObjectId, ref: 'toilets' },
    	stars       : Number,
    	observation : String,
    	userId      : {type: Schema.ObjectId, ref: 'users'}
    }] 
});