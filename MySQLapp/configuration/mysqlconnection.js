// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL

/*
Here is where you make the connection to the database and export and used by the O.R.M.
*/
var mysql = require('mysql');
var connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: '10Yoyoyoyo',
	database: 'drumsILike'
});

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log("Cool, your connection to the database using mysql has been established!");
	console.log("Now you can ping the database to do CRUD.");
	console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;