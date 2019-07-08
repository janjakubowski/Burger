// Import MySQL connection.
var db = require("../config/connection.js");

// Helper function for SQL syntax - create an array of "?"s, one for the number specified ("num")
function printQuestionMarks(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push("?");
	}
	return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax;
// the key is column name and value is the value to set that column to with an "="
function objToSql(ob) {
	var arr = [];

	// loop through the keys and push the key/value as a string int arr
	for (var key in ob) {
		var value = ob[key];
		// check to skip hidden properties
		if (Object.hasOwnProperty.call(ob, key)) {
		// if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
		if (typeof value === "string" && value.indexOf(" ") >= 0) {
			value = "'" + value + "'";
		}
		// e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
		// e.g. {sleepy: true} => ["sleepy=true"]
		arr.push(key + "=" + value);
		}
	}

	// translate array of strings to a single comma-separated string
	return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
	// 
	// select all the rows and all the columns from "table"
	selectAll: function(table, callback) {
		var queryString = "SELECT * FROM " + table+ ";";
		db.query(queryString, function(err, result) {
		if (err) {
			throw err;
		}
		callback(result);
		});
	},
	insertOne: function(table, cols, vals, callback) {
		var queryString = "INSERT INTO " + table 
						+ " (" + cols.toString() + ") " 
						+ "VALUES (" + printQuestionMarks(vals.length) + ") ";

		db.query(queryString, vals, function(err, result) {
		if (err) {
			throw err;
		}

		callback(result);
		});
	},
	//
	// update: update "table" using value pairs in the object "objCalVals" at rows matching "condition"
	// use objToSQL helper function to translate "objColVals" fom an object to SQL
	update: function(table, objColVals, condition, callback) {
		var queryString = "UPDATE " + table 
						+ " SET " + objToSql(objColVals)
						+ " WHERE " + condition;
		db.query(queryString, function(err, result) {
		if (err) {
			throw err;
		}

		callback(result);
		});
	},
	//
	// delete: delete the row with "id" from "table"
	delete: function(table, condition, cb) {
		var queryString = "DELETE FROM " + table;
		queryString += " WHERE ";
		queryString += condition;

		db.query(queryString, function(err, result) {
		if (err) {
			throw err;
		}

		cb(result);
		});
	}
};

module.exports = orm;
