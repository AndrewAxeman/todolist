'use strict'

var uuid = require('uuid');


var db = require('../classes/driverdb') 

var driverUser = new db ('users')

module.exports = class User {

	constructor(){
		console.log( 'created' )
	}

	 createuser( req, res ){

		driverUser.getOne( { name: req.body.name} , function ( err, entity ){ 

			if( entity === null ){

				var token = uuid.v1()

		         driverUser.create( { name: req.body.name, password:req.body.password, token: token}, function ( err, entity ){ 
		         //res.send( JSON.stringify({ token: token }) )
		         res.json({ token: token, message: 'its ok' }) 
	             console.log(err)
		       })           		
		         
			}else{

		        res.json({ message: 'This User Exist' }) 

			}
		})
			
     }


	deleteuser( req, res ){
         
		 driverUser.delete( req.body.id  , function ( err, result ){
	     console.log( err )
	     res.json({ message: 'We have a problem' })
	     } )
				
	} 






}