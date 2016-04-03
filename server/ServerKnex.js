var mysql  = require('mysql');
var express  = require('express');
var bodyParser = require("body-parser");
var knex = require('knex')({
    client:'mysql',
    connection: {
         host     : 'localhost',
         user     : 'root',
         password : 'angela',
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

var selectAllTablesOptions = ['equipment','patient','visit'];
var postTablesOptions = ['patient', 'equipment', 'vital', 'report', 'visit', 'staff',
'prescription'];

// Join Visit and Patient table
app.get('/patient_visit', function(req,res){visit_patient(req,res)})

// Join Visit and Report table
app.get('/patient_report', function(req,res){patient_report(req,res)})

// Select experienced staff
app.get('/staff/:year', function(req,res){selectExperiencedStaff(req,res,req.params.year)});

// Get All from table
app.get('/:table', function(req,res){processQuery(req,res, selectAllTablesOptions, getAllFromTable)});

// Post to table
app.post('/:table', function(req,res){processQuery(req,res,postTablesOptions, postData)});

// Utilize all equipment
app.get('/utilize_equip/:eidList', function(req,res){
    var eids = req.params.eidList.split(',');
    utilizeAllEquipment(req,res, eids);
});

// Delete patient based on pid
app.get('/patient/delete/:id', function(req,res){deleteFromPatient(req,res)});

function processQuery(req,res,options,handler){
    if((options.indexOf(req.params.table)) > -1){
         handler(req,res,req.params.table);
    } else {
         res.end(JSON.stringify({error: 'invalid table name'}));
    }
}


function getAllFromTable(req,res,table){
	knex.select().from(table).catch(this.errorHandler).then(rows => res.send(rows));
}

function postData(req,res,table){
    var post = JSON.parse(req.body.json);
    knex(table).insert(post)
        .catch(this.errorHandler)
        .then({success:true}); 
}

function deleteFromPatient(req,res){
    knex('patient')
        .where('pid',req.params.id)
        .del()
        .catch(this.errorHandler)
        .then(res.send(JSON.stringify({success:true})));
}

function visit_patient(req,res){
    knex.from('patient').innerJoin('visit', 'visit.pid', 'patient.pid')
    .select()
    .catch(this.errorHandler).then(rows => res.send(rows));
}

function patient_report(req,res){
    knex.from('patient').innerJoin('report', 'report.pid', 'patient.pid')
    .select()
    .catch(this.errorHandler).then(rows => res.send(rows));
}

function selectExperiencedStaff(req,res,year){
    if(year >= 30 && year <= 50){
        knex('staff').where('experience_in_years','>',year).select('s_lname','s_fname').catch(this.errorHandler).then(rows => res.send(rows));
    } else {
        invalidCondition(res,'year must be between 30 and 50 inclusively');
    }
}



function utilizeAllEquipment(req,res,eids){
    knex('utilize')
    .whereIn('eid', eids)
    .groupBy('pid')
    .havingRaw('count(*) = ?', eids.length)
    .select('pid')
    .catch(this.errorHandler)
    .then(rows => res.send(rows))
}

function errorHandler(error){
    console.error(error);
}

function invalidCondition(res,msg){
    res.send(JSON.stringify({error: msg}));
}


app.listen(3002);
