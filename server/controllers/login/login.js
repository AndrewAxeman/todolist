'use strict'
var uuid = require('uuid');

var auth = require ('../../classes/auth')  

var db = require('../../classes/driverdb') 

var User = new db ('users')


module.exports = function ( req, res ){



	//User.getOne( { name: req.body.name} , function ( err, entity ){
		console.log( req.body )

	auth.isLogged( req.body.name, req.body.password, function ( err, response ){

		if ( response !== null ){
         
	 		var token = uuid.v1()

	 		User.update({_id: response.id ,token: token}, function ( error, result ){

	     	console.log( result )

	 		})

	        res.json({ token: token, status: 200, message: 'its ok' }) 
	        console.log(err)

		 }else{

	        res.json({ status: 400, message: err }) 

		}

	})
	
 }