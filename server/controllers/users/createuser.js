'use strict'
var uuid = require('uuid');


var db = require('../../classes/driverdb') 

var User = new db ('users')


module.exports = function ( req, res ){

	User.getOne( { name: req.body.name} , function ( err, entity ){ 

		if( entity === null ){

			var token = uuid.v1()

	         User.create( { name: req.body.name, password:req.body.password, token: token }, function ( err, entity ){ 
	         //res.send( JSON.stringify({ token: token }) )
	         res.json({ token: token }) 
             console.log(err)
	       })           		
	         
		}else{

	        res.send('This user exist')

		}
	})
		
	
} 

