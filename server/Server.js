var mysql  = require('mysql');
var express  = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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

app.post('/', postPatient);
app.get('/visit', getAllFromVisit);



function getAllFromVisit(req,res){
	connection.query('SELECT * from visit', function(err, result) {
  	if (!err){
    	res.send(result);
      }else
    	console.log('Error while performing Query.');
});}



function postPatient(req,res){
    var post = JSON.parse(req.body.json);
    var query = connection.query('INSERT INTO patient SET ?', post);
    console.log("successfully queried: " + query.sql);
}

//TEST

var post = {p_lname:"new", p_fname: "dude", pid: "2007", is_male: 1, dob: "1992-05-12"};
var query = connection.query('INSERT INTO patient SET ?', post, function (err,result){
    if(err){
        console.error(err);
        return;
    }
    console.log("successfully queried: " + query.sql);
    console.log(result);
});


app.listen(3002);
