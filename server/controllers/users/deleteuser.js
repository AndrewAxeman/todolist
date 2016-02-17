'use strict'
var db = require('../../classes/driverdb') 

var Todolist = new db ('todos')

module.exports = function ( req, res ){

	 Todolist.delete( req.params.id  , function ( err, result ){
     console.log( err )
     res.send( result )
     } )
			
} 