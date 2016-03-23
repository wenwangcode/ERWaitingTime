//mysql -u root -h 127.0.0.1 -p
//use that to log in
var mysql  = require('mysql');
var express  = require('express');
var app = express();
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '639288',
  database : 'ERWaitingTime'})
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ...");
} else {
    console.log(err);
}
});
console.log('123');
//console.log(app.get('/patient', getAllFromPatient));
app.get('/staff', getAllFromStaff);
app.get('/visit', getAllFromVisit);
var query = connection.query('SELECT * FROM patient');
console.log(query.on('/patient', function(row) {
}));
function getAllFromPatient(req,res){
	connection.query('SELECT * FROM patient', function(err, rows, fields) {
  	if (!err){
		req.get(rows);
	}
  	else
    	console.log('Error while performing Query.');
});}

function getAllFromStaff(req,res){
	connection.query('SELECT * from staff', function(err, rows, fields) {
  	if (!err)
    	res.send(rows);
  	else
    	console.log('Error while performing Query.');
});}

function getAllFromVisit(req,res){
	connection.query('SELECT * from visit', function(err, rows, fields) {
  	if (!err){
    	res.send(rows);
        //console.log("visit data sent");
      }else
    	console.log('Error while performing Query.');
});}
connection.end();
app.listen(3001);
