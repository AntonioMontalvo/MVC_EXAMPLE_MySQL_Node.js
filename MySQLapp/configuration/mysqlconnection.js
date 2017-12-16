// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL

/*
Here is where you make the connection to the database and export and used by the O.R.M.
*/
var mysql = require('mysql');

//JAWSDB Connection String this string contains in order. The username then password then the host port and at the end the database.

//mysql://f11t56lxnvggniy7:xylsu889ul2jln2e@tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/w8b2citrb56o7d2w



// we placed the connections in this source object
var source = {
    // localhost
    localhost: {
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: '10Yoyoyoyo',
	database: 'drumsILike'
    },

    // jawsDB
    jawsDB: {
        port: 3306,
        host: 'tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'f11t56lxnvggniy7',
        password: "xylsu889ul2jln2e",
        database: 'w8b2citrb56o7d2w'
    }
}

// we use source.[name of connection] to hook into mysql
var connection = mysql.createConnection(source.jawsDB);


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