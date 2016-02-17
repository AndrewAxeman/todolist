'use strict'
var db = require('../../classes/driverdb') 

var Task = new db ('todos')

module.exports = function ( req, res ){

	Task.getById( { _id: req.params.id} , function ( err, entity ){ 
	res.send(entity)
	}) 
		
	
} 