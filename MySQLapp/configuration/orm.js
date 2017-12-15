//Our Object Relational Mapper. Here we create the methods to convert objexts to scalar values and viceversa; write functions that takes inputs and conditions and turn them into database commands like SQL.


// Dependencies. We need to connect to our database. That connection is established in mysqlconnection.js

var connection = require('./mysqlconnection.js');

var tableName = "cymbals";

var orm = {

    // Here our ORM is creating a simple method for performing a query of the entire table.
    // We make use of the callback to ensure that data is returned only once the query is done.
    showAllCymbals: function(callback) {
        console.log("I'm the showAllCymbals method. I'm part of the orm");
        var all = 'SELECT * FROM ' + tableName;

        connection.query(all, function(err, result) {

            callback(result);

        });
    },

    // Here our ORM is creating a simple method for adding characters to the database
    // Effectively, the ORM's simple addCymbal method translates into a more complex SQL INSERT statement. 

    addCymbal: function(cymbal, callback) {
        console.log("I'm the addCymbal method. I'm part of the orm");
        var s = "INSERT INTO " + tableName + " (brand, name, diameter, model, price) VALUES (?,?,?,?,?)";

        connection.query(s, [cymbal.brand, cymbal.name, cymbal.diameter, cymbal.model, cymbal.price], function(err, result) {

            callback(result);

        });
    },

    searchCymbal: function(name, callback){
        console.log("I'm the searchCymbal method. I'm part of the orm");
        var s = 'select * from ' + tableName + ' where brand=?';

        connection.query(s,[name], function(err, result) {
     
            callback(result);
        });

    }

}

module.exports = orm;