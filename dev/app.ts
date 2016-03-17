/**
 * Created by wendywang on 2016-03-16.
 */
var mySQL = require('mysql');
var connection = mySQL.createConnection({
    host : 'localhost',
    user : 'root',
    password : '639288',
    database : 'me'
});

connection.connect();
connection.query('SELECT * FROM patient', function(err, rows, fields) {
    if (err) throw err;

    console.log('the solution is: ', rows[0]);
});

connection.end();