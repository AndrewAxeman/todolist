'use strict'
var db = require('../../classes/driverdb') 

var Todolist = new db ('todos')

module.exports = function ( req, res ){

	Todolist.getById( { _id: req.params.id} , function ( err, entity ){ 
	res.send(entity)
	}) 
		
	
} 