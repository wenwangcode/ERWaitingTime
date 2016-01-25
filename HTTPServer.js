//require/import HTTP module
var http = require('http');

//define a port
const PORT = 8080;

//handles requests and send response
function handleRequest(request, response){
    response.end('Path hit: ' + request.url);
}

//create a server
var server  = http.createServer(handleRequest);

//start our server
server.listen(PORT, function(){
    //if it is listening, it will print the following:
    console.log("server listening on: http://localhost:%s", PORT);
});