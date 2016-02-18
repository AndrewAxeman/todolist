
window.getToken = function ( ) {
	console.log( localStorage.getItem('token') )
}


window.deleteuser = function ( data ) {

	var http = new XMLHttpRequest()
    var url = "/users/"
    var params="key="+data

    http.open("DELETE", url, true)
	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

	http.onreadystatechange = function() {//Call a function when the state changes.
	    if( http.readyState == 4 && http.status == 200 ) {

	        console.log( http.responseText )

	    }
	}

	http.send( params )


}



window.createuser = function ( data,val ) {

	var http = new XMLHttpRequest()
	var url = "/users"
	var body = "name="+data+"&password="+val 
	http.open("POST", url, true)

	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

	http.onreadystatechange = function() {//Call a function when the state changes.
	    if( http.readyState == 4 && http.status == 200 ) {

	        var response = JSON.parse( http.responseText )

	        console.log( response.message )

            localStorage.setItem( 'token', response.token )
	    }
	}

	http.send( body )


}

window.loginuser = function ( name,pass ) {

	var http = new XMLHttpRequest()
    var url = "/login"
    var params = "name="+name+"&password="+pass

    http.open("POST", url, true)
	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

	http.onreadystatechange = function() {//Call a function when the state changes.
	    if( http.readyState == 4 && http.status == 200 ) {

	         var response = JSON.parse( http.responseText )

	         console.log( response.message )

             localStorage.setItem( 'token', response.token )

	    }
	}

	http.send( params )


}