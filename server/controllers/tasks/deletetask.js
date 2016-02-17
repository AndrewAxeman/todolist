'use strict'
var db = require('../../classes/driverdb') 

var Task = new db ('todos')

module.exports = function ( req, res ){

	 Task.delete( req.params.id  , function ( err, result ){
     console.log( err )
     res.send( result )
     } )
			
} 