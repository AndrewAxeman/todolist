'use strict'
var db = require('../../classes/driverdb') 

var Task = new db ('todos')

module.exports = function ( req, res ){

	Task.getOne( { name: req.params.name} , function ( err, entity ){ 
	res.send(entity)
	 }) 

}
		
