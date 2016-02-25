'use strict'

var db = require('../classes/driverdb') 

var driverTask = new db ('todos')

var driverUser = new db ('users')

module.exports = class Task {

	delete_task( req, res ){
         
		 driverTask.delete( req.body.taskid  , function ( err, result ){

		     console.log( err )

		     res.send( { message: "Task was delete" } )
	     
	     } )
				
	} 


	update_task( req, res ){
        if ( req.body.state === 'active' ) {

			 driverTask.update( { _id: req.body.id , state: 'passive' }  , function ( err, result ){

			     console.log( err )

			     res.send( { message: "Task was Done" } )
       
		     } )

		}else{

			 driverTask.update( { _id: req.body.id , state: 'active' }  , function ( err, result ){

			     console.log( err )

			     res.send( { message: "Task was Active" } )
       
		     } )


		}		
	} 


	createtask( req, res ){
      
        if( req.body.text !== '' ){

	        driverUser.getOne( { token: req.body.token } , function ( error, result ){

	             if ( result !=='' ){

						driverTask.create( { text: req.body.text, id_name: result._id, state: "active" }, function ( err, entity ){ 

							res.json( { message: "Task was create" } )
	                
	                     })                    
			     
			     }else{
	            
	            console.log( error )

			     }

			})

		}else{
		
             res.json( { message:"Please enter text"} )


		}	
			
    } 


    getAllTasks( req, res ){

        driverUser.getOne( { token: req.params.id } , function ( error, result ){

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

