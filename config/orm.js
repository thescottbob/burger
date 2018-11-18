// Import MySQL connection.
var connection = require("../config/connection.js");

// Create the methods that will execute the necessary MySQL
// commands in the controllers. These are the methods you will 
// need to use in order to retrieve and store data in your database.

var tableName = "burgers";

var orm = {

  // Here our ORM is creating a method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  selectAll: function(callback) {
    var select = "SELECT * FROM " + tableName;

    connection.query(select, function(err, result) {

      callback(result);

    });
  },

 // Here our ORM is creating a method for inserting one new record into the database
  insertOne: function(burgerMe, callback) {
    var insert = "INSERT INTO " + tableName + " (text, complete) VALUES (?,?)";
    burgerMe.complete = burgerMe.complete || 0;
    connection.query(insert, [
      burgerMe.text, burgerMe.complete
    ], function(err, result) {

      callback(result);

    });
  },

 // Here our ORM is creating a method for updating one existing record in the database 
  updateOne: function(id, callback) {

    var update = "UPDATE " + tableName + " SET field1 = new-value1 WHERE";

    connection.query(update, [id], function(err, result) {

      callback(result);
    });

  },
};

// Export the orm object for the model (burger.js).
module.exports = orm;
