var mysql  = require('mysql');
var express  = require('express');

var app = express();

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


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

app.get('/visit', getAllFromVisit);

function getAllFromVisit(req,res){
	connection.query('SELECT * from visit', function(err, result) {
  	if (!err){
    	res.send(result);
      }else
    	console.log('Error while performing Query.');
});}

app.listen(3002);
