'use strict'

var auth = require ('../../classes/auth')  

var db = require('../../classes/driverdb') 

var User = new db ('users')


module.exports = function ( req, res ){



	//User.getOne( { name: req.body.name} , function ( err, entity ){

	auth.outLogged( req.body.id, function ( err, response ){

		if ( response !== null ){

         		User.update({_id:response.id ,token: ""  }, function ( err, result ){

             	console.log( result )

         		})

	            res.json({ token: "", status: 200, message: 'its out' }) 
                console.log(err)


        
	         
		 }else{

	        res.json({ status: 400, message: err }) 

		}

	})


	

 }