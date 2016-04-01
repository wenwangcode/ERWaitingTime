var mysql  = require('mysql');
var express  = require('express');
var bodyParser = require("body-parser");
var knex = require('knex')({
    client:'mysql',
    connection: {
         host     : 'localhost',
         user     : 'root',
         password : 'thematrix',
         database : 'emergency'
    },
    pool:{
        min:0,
        max:10
    }
});
var app = express();

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/equipment', function(req,res){getAllFromTable(req,res,'equipment');});
app.get('/patient', function(req,res){getAllFromTable(req,res,'patient');});
app.get('/staff', function(req,res){getAllFromTable(req,res,'staff');});
app.get('/vital', function(req,res){getAllFromTable(req,res,'vital');});
app.get('/visit', function(req,res){getAllFromTable(req,res,'visit');});
app.get('/user', function(req,res){getAllFromTable(req,res,'user');});

app.post('/patient',function (req,res){postData(req,res,'patient')});
app.post('/equipment',function(req,res){postData(req,res,'equipment')});
app.post('/vital',function(req,res){postData(req,res,'vital')});
app.post('/report',function(req,res){postData(req,res,'report')});
app.post('/visit',function(req,res){postData(req,res,'visit')});
app.post('/staff',function(req,res){postData(req,res,'staff')});
app.post('/prescription',function(req,res){postData(req,res,'prescription')});
app.post('/user',function(req,res){postData(req,res,'user')});

function login (username, password, callback) {

    var query = "SELECT username, password " +
        "FROM user WHERE username = ?";

    connection.query(query, [username], function (err, results) {
        if (err) return callback(err);
        if (results.length === 0) return callback();
        var user = results[0];

        if (!bcrypt.compareSync(password, user.password)) {
            return true;
        }

        callback(null,   {
            username:    user.username.toString()
        });

    });

}


function getAllFromTable(req,res,table){
	knex.select().from(table).catch(this.errorHandler).then(rows => res.send(rows));
}

function postData(req,res,table){
    console.log(req.body.json);
    var post = JSON.parse(req.body.json);
    knex(table).insert(post)
        .catch(this.errorHandler)
        .return({success:true});
}
function errorHandler(error){
    console.error(error);
}

app.listen(3002);
