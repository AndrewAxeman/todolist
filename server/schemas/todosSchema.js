var mongoose = require( 'mongoose' )


var todos = mongoose.model( 'Todos', mongoose.Schema({
	text: { type: String, default: '' }
	
}) )

module.exports = todos