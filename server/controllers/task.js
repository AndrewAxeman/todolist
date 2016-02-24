'use strict'

var db = require('../classes/driverdb') 

var driverTask = new db ('todos')

var driverUser = new db ('users')

module.exports = class Task {

	delete_task( req, res ){
         console.log(req.body.taskid)
		 driverTask.delete( req.body.taskid  , function ( err, result ){
	     console.log( err )
	     res.send( { message: "Task was delete" } )
	     } )
				
	} 


	createtask( req, res ){
        
        driverUser.getOne( { token: req.body.token } , function ( error, result ){

             if ( result !=='' ){

					driverTask.create( { text: req.body.text ,id_name: result._id }, function ( err, entity ){ 

						res.json( { message: "Task was create" } )
                
                     })                    
		     
		     }else{
            
            console.log( error )

		     }

		})
			
    } 

    getAllTasks( req, res ){

        driverUser.getOne( { token: req.params.id } , function ( error, result ){

        	console.log( result._id )

             if ( result !== null ){

				driverTask.getALL( result._id  , function ( err, entity ){

				res.send( entity )
                console.log( entity )
		        })

		     }else{

             res.json( { message: 'This user dont have any task' } )

		     }   

         })
     }

}

