'use strict'

var db = require('../classes/driverdb') 

var driverTask = new db ('todos')

module.exports = class Task {

	delete_task( req, res ){

		 driverTask.delete( req.body.id  , function ( err, result ){
	     console.log( err )
	     res.send( { message: "Task was delete" } )
	     } )
				
	} 


	createtask( req, res ){
  
		driverTask.create( { text: req.body.text }, function ( err, entity ){ 
		res.json( { message: "Task was create" } )

		})
		
	
    } 

    get_task( req, res ){

		Task.getOne( { name: req.params.name} , function ( err, entity ){ 
		res.send(entity)
		 }) 

    }
}

