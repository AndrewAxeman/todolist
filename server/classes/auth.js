'use strict'


var db = require('./driverdb') 

var User = new db ('users')

class Auth{

    isLogged ( name, pass, cb ){

 		User.getOne( { name: name} , function ( err, entity ){ 

		if( entity !== null ){

			if( entity.password === pass ){
         
         		cb( null, entity )
             
             }else{

             	cb( 'Incorrect password', null )
			 
            }
	         
		 }else{

	        cb( 'This user dont register', null )

		}

	    })

     }

    outLogged ( id, cb ){

 		User.getOne( { _id: id } , function ( err, entity ){ 

			if( entity.token !== "" ){
	         
	         	 cb( null, entity )
	     	         
			 }else{

		         cb( 'This dont log', null )

		    }

        })

     }    


}     


 var auth = new Auth()

 module.exports = auth