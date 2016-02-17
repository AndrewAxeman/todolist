'use strict'
var db = require('../../classes/driverdb') 

var Todolist = new db ('todos')

module.exports = function ( req, res ){

	Todolist.getOne( { name: req.params.name} , function ( err, entity ){ 
	res.send(entity)
	 }) 

}
		
