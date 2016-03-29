function postPatient(req,res){
    var patient = JSON.parse(req.body.json);
    var query = connection.query('INSERT INTO patient SET ?', patient, function(err,result){
        if(err){
            console.error(err);
            return;
        }
        console.log("successfully queried: " + query.sql);
        console.log(result);
    });
}