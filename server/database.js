//mysql -u root -h 127.0.0.1 -p
//use that to log in
var mysql  = require('mysql');
var express  = require('express');
var app = express();
var HOST = '127.0.0.1';
var USER = 'root';
var PASSWORD = '639288';
var DATABASE = 'ERWaitingTime';

var connection = mysql.createConnection({
	host     : HOST,
	user     : USER,
	password : PASSWORD,
	database : DATABASE});

app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Methods', "GET");
	res.header('Access-Control-Allow-Headers', "Content-Type");
});

connection.connect(function(err){
	if(!err) {
		console.log("Database is connected ...");
	} else {
		console.log(err);
	}
});
function getAllFromPatient(req,res){
	connection.query('SELECT * FROM patient', function(err, result) {
		if (!err) {
			res.send(result);
		}
		else
			console.log('Error while performing Query.');
	});}

function getAllFromStaff(req,res){
	connection.query('SELECT * FROM staff', function(err, result) {
  	if (!err) {
		console.log(result);
	}
  	else
    	console.log('Error while performing Query.');
});}
app.get('/staff', getAllFromStaff);

function getAllFromVisit(req,res){
	connection.query('SELECT * FROM visit', function(err, result) {
		if (!err){
			res.send(result);
		}else
			console.log('Error while performing Query.');
	});}

app.get('/visit', getAllFromVisit);
app.listen(3006);
