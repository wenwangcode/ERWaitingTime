GET: Query to 'http://localhost:3002/patient' or 'http://localhost:3002/equipment' to get all the relevant table tuples.
POST: Query to 'http://localhost:3002/<table name>', basically the same as above but use post request.
   available post-to tables are equipment, vital, report, visit, patient, staff, prescription
   
   For POST request, you need to query to http://localhost:3002/<table name>/?json={"key":"value"}. Essentially, you need to attach your json object with "json="
   
   I'm following the format with http://www.jsontest.com/#validate. Also, I only support "application/x-www-form-urlencoded" content type, so put that in the header.
