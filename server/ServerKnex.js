var mysql  = require('mysql');
var express  = require('express');
var bodyParser = require("body-parser");
var knex = require('knex')({
    client:'mysql',
    connection: {
         host     : 'localhost',
         user     : 'root',
         password : '639288',
         database : 'emergency',
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

app.post('/patient',function (req,res){postData(req,res,'patient')});
app.post('/equipment',function(req,res){postData(req,res,'equipment')});
app.post('/vital',function(req,res){postData(req,res,'vital')});
app.post('/report',function(req,res){postData(req,res,'report')});
app.post('/visit',function(req,res){postData(req,res,'visit')});
app.post('/staff',function(req,res){postData(req,res,'staff')});
app.post('/prescription',function(req,res){postData(req,res,'prescription')});


function getAllFromTable(req,res,table){
	knex.select().from(table).catch(this.errorHandler).then(rows => res.send(rows));
}

function postData(req,res,table){
    var post = JSON.parse(req.body.json);
    knex(table).insert(post)
        .catch(this.errorHandler)
        .return({success:true}); 
}
function errorHandler(error){
    console.error(error);
}


app.listen(3002);
