// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies


// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)
var orm = require ("../configuration/orm.js");


// Routes

module.exports = function(app){

	// Search for All Cymbals  then provides JSON
	app.get('/api', function(req, res){
			var data =  orm.showAllCymbals(function(data){
				console.log("This is the data we get with express using the orm through api-routes.js " +data);
				res.json(data); 		
			})
	});

	// If a user sends data to add a new character...
	app.post('/api/addCymbal', function(req, res){

		// Take the request...
		var cymbal = req.body;

		// Then send it to the ORM to "save" into the DB.
		orm.addCymbal(cymbal, function(data){
			console.log("This is the data we post with express using the orm through api-routes.js " + data);
		});
	});

	//if the user searches for a particular cymbal
	app.get('/api/:searchCymbal?', function(req, res){

		// If the user provides a specific character in the URL...
		if(req.params.searchCymbal){

			// Then display the JSON for ONLY that character.
			// (Note how we're using the ORM here to run our searches)
			orm.searchCymbal(req.params.searchCymbal,function(data){
				res.json(data);
			})
		}

		// Otherwise...
		else{
			// Otherwise display the data for all of the characters. 
			// (Note how we're using the ORM here to run our searches)
			var data =  orm.showAllCymbals(function(data){
				res.json(data); });
			};	
	})
}	


