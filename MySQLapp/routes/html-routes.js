
// html-routes.js - this file offers a set of routes for sending users to the various html pages // 

// Dependencies
var path = require('path');

// Routes

module.exports = function(app){

///////////////////////////////////////////////////
// Our server's possible routes for the tutorial //
///////////////////////////////////////////////////

// app.get(path, callback [, callback ...]); Routes HTTP GET requests to the specified path with the specified callback functions.
// Each of the below routes just handles the HTML page that the user gets sent to.
	
// index route loads introduction.html

// when the server gets "/"
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/views/introduction.html')); //sendFile transfers the filefile at the given path with the response, in this case the Home Page.
});



//when the server gets a request for "/drumsILIke"
app.get("/addCymbal", function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/views/addCymbal.html')); //respond sending the routes page 
});


	


}
