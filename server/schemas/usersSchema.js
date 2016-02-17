var mongoose = require( 'mongoose' )

var usersSchema = mongoose.Schema({
	name:			{ type: String, default: '' },
	password:	    { type: String, default: '' },
	token:          { type: String, default: '' }
})


var users = mongoose.model( 'UserReg', usersSchema )

module.exports = users