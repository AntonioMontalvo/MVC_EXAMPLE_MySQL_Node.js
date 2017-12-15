/////////////////////////////////
//  Application Dependencies   //
/////////////////////////////////
//here we tell node.js that 'express' is a dependenciy in this application/ express() is a top-level function exported by the express module. Basically an instance of express.
const express = require("express");
const app = express();

//Path is one of Node's built in modules. The path module provides utilities for working with file and directory paths
var path = require('path');

//Body Parser. We need to parse incoming request bodies in a middleware before your handlers.
var bodyParser = require('body-parser');

/////////////////////////////////
//  Application Methods        //
/////////////////////////////////
//app.use([path,] callback [, callback...])
//Mounts the specified middleware function or functions at the specified path. Since .css files are static files you have to serve them to the clients. Using the express.static middleware in an Express app. Serve static content for the app from the “public” directory in the application directory. What this means is that this middleware will make available to the app all the files in the public directory. To <link> it in the .html file your path is no longer from the .html file to the .css file but straight from /public in our cas is <link rel="stylesheet" href="/css/school.css">

//tell our server to use the public static directory located in MySQLapp
app.use(express.static('MySQLapp/public'));




// tell express to use this middleware to parse urlencoded bodies. The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). The "extended" syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.
// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Routes

require("./MySQLapp/routes/api-routes.js")(app)
require("./MySQLapp/routes/html-routes.js")(app)

////////////////////////////////////////////
// Our server'sresponse to not Found Path //
////////////////////////////////////////////

//Handle 404 page not found. This is 100% "kosher" but I like it.
app.use(function(req, res) {
    res.sendFile(path.join(__dirname,'views/notFound.html'));
});


//start listening


app.listen(process.env.PORT || 8080, function() {
    console.log("app listening on port 8080!. Go to http://localhost:8080"); //confirm app is listening
});