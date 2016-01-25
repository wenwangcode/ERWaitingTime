//require/import HTTP module
var http = require('http');

//define a port
const PORT = 8080;

//server should respond differently to different URL paths. So we need a dispatcher
var dispatcher = require('httpdispatcher');

//handles requests and send response
function handleRequest(request, response){
    try {
        //log the request on console
        console.log(request.url);
        //dispatch
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

dispatcher.setStatic('waitingtime');

//login GET request. Need to get the login page HTML from Joy
dispatcher.onGet("/login", function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Default login page');
});

//login POST request
dispatcher.onPost("/login", function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data from login');
})

//create a server
var server  = http.createServer(handleRequest);

//start our server
server.listen(PORT, function(){
    //if it is listening, it will print the following:
    console.log("server listening on: http://localhost:%s", PORT);
});