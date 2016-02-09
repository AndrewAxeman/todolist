var http = require('http')
var path = require('path')
var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

/**
* Set the parameters
*/

var app = express()
var port = 8000

/**
* Configure app
*/
mongoose.connect( 'mongodb://Axeman:0000@ds053305.mongolab.com:53305/brutto',
	function() { console.log('Connected to db') } )

app.use( express.static( path.join( __dirname, './views' ) ))

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())


/**
* Require frontend dir public
*/

app.get( '/', function( req, res ) {
res.sendFile( path.join( __dirname, './views' ) )

} )

	

/**
* Test Work
*/
var db = require('./app/driverdb') 

var Man = new db ('users')



app.get('/createuser/:name/:password',function ( req, res){

    Man.getOne( { name: req.params.name} , function ( err, entity ){ 

		if( entity === null ){

	         Man.create( { name: req.params.name, password:req.params.password }, function ( err, entity ){ 
	         res.send(entity)
	       })           		
	         
		}else{

	        res.send('This user exist')

		}

 	}) 


})



app.get('/finduser/:name',function ( req, res ){

Man.getOne( { name: req.params.name} , function ( err, entity ){ 
res.send(entity)
 }) 


})


app.get('/findid/:id',function ( req, res ){

Man.getById( { _id: req.params.id} , function ( err, entity ){ 
	console.log(err, entity)
res.send(entity)
 }) 


})



app.get('/updateuser/:id/:name' ,function ( req, res ){

 Man.update( { _id: req.params.id, name: req.params.name}, function ( result ){
   //console.log( err )
   res.send( result._id )

} )


})



app.get('/deleteuser/:id' ,function ( req, res ){

 Man.delete( req.params.id  , function ( err, result ){
   console.log( err )
   res.send( result )
 } )

 })



/**
* Require routes
*/

http.createServer( app ).listen( port, function ( err ) {
console.log( 'Server running with port : '+ port )
})


