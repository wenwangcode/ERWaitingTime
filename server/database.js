var mysql  = require('mysql');
var express  = require('express');

var app = express();
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'angela',
  database : 'emergency',
});

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});

app.get('/patient',getAllFromPatient);
app.get('/staff', getAllFromStaff);
app.get('/visit', getAllFromVisit);

function getAllFromPatient(req,res){
	connection.query('SELECT * from patient', function(err, rows, fields) {
  	if (!err)
    	res.send(rows);
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
        console.log("visit data sent");
      }else
    	console.log('Error while performing Query.');
});}

app.listen(3002);
