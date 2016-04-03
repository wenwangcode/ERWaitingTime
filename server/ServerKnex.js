var mysql  = require('mysql');
var express  = require('express');
var bodyParser = require("body-parser");
var knex = require('knex')({
    client:'mysql',
    connection: {
         host     : 'localhost',
         user     : 'root',
         password : '19930821',
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
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
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
app.get('/report', function(req,res){getAllFromTable(req,res,'report');});
app.get('/prescription',function(req,res){getAllFromTable(req,res,'prescription')});
app.get('/vital/max', function(req,res){maxPressure(req,res)});

app.post('/patient',function (req,res){postData(req,res,'patient')});
app.post('/patients/register',function (req,res){postData(req,res,'patient')});
app.post('/equipment',function(req,res){postData(req,res,'equipment')});
app.post('/vital',function(req,res){postData(req,res,'vital')});
app.post('/report',function(req,res){postData(req,res,'report')});
app.post('/visit',function(req,res){postData(req,res,'visit')});
app.post('/staff',function(req,res){postData(req,res,'staff')});
app.post('/prescription',function(req,res){postData(req,res,'prescription')});
app.post('/patient/update/:pid',function(req,res){updatePatient(req,res)});
var selectAllTablesOptions = ['equipment','patient','visit'];
var postTablesOptions = ['patient', 'equipment', 'vital', 'report', 'visit', 'staff',
    'prescription'];

// Update to patient Wendy
app.post('/patient/update/:pid',function(req,res){updatePatient(req,res)});

// Join Visit and Patient table v
app.get('/patient_visit', function(req,res){visit_patient(req,res)})

// Join Visit and Report table v
app.get('/patient_report', function(req,res){patient_report(req,res)})
// Wendy
app.get('/vital/max', function(req,res){maxPressure(req,res)});

// Select experienced staff v
app.get('/staff/:year', function(req,res){selectExperiencedStaff(req,res,req.params.year)});

// Get All from table v
app.get('/:table', function(req,res){processQuery(req,res, selectAllTablesOptions, getAllFromTable)});

// Post to table v
app.post('/:table', function(req,res){processQuery(req,res,postTablesOptions, postData)});

// Utilize all equipment
app.get('/utilize_equip/:eidList', function(req,res){
    var eids = req.params.eidList.split(',');
    utilizeAllEquipment(req,res, eids);
});

// Delete patient based on pid v
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
        .then(res.send(JSON.stringify({success:true})));
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

function maxPressure(req,res) {
    knex('vital')
        .innerJoin('report', 'vital.vid', 'report.vid')
        .orderBy('blood_pressure', 'desc')
        .select('report.pid', 'vital.blood_pressure')
        .catch(this.errorHandler)
        .then(rows => res.send(rows))
}

function updatePatient(req,res){
    knex('patient')
        .where('pid', req.params.pid)
        .update(JSON.parse(req.params.json))
        .catch(this.errorHandler)
        .then(res.send(JSON.stringify({status: 'success'})));
}


function errorHandler(error){
    console.error(error);
}

function invalidCondition(res,msg){
    res.send(JSON.stringify({error: msg}));
}


app.listen(3002);
