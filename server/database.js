//mysql -u root -h 127.0.0.1 -p
//use that to log in
var mysql  = require('mysql');
var express  = require('express');
var app = express();
var HOST = '127.0.0.1';
var USER = 'root';
var PASSWORD = '639288';
var DATABASE = 'ERWaitingTime';
app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Methods', "GET");
	res.header('Access-Control-Allow-Headers', "Content-Type");
});
var connection = mysql.createConnection({
  host     : HOST,
  user     : USER,
  password : PASSWORD,
  database : DATABASE});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ...");
} else {
    console.log(err);
}
});

app.get('/patient', getAllFromPatient);
app.get('/staff', getAllFromStaff);
app.get('/visit', getAllFromVisit);
function getAllFromPatient(req,res){
	connection.query('SELECT * FROM patient', function(err, rows, fields) {
  	if (!err){
		console.log(callback(null, rows[0]).toString);
	}
  	else
    	console.log('Error while performing Query.');
});}

function getAllFromStaff(req,res){
	connection.query('SELECT * from staff', function(err, data) {
  	if (!err)
    	res.send(JSON.stringify(data));
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
app.listen(3001);
