'use strict'
var db = require('../../classes/driverdb') 

var auth = require('../../classes/driverdb') 

var Task = new db ('todos')

module.exports = function ( req, res ){

	console.log('Wow')
	Task.create( { text: req.params.text }, function ( err, entity ){ 
	res.send(entity)

	})
		
	
} 

