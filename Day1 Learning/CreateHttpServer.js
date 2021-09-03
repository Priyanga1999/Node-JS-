let http=require('http');
http.createServer(function(request,response)
{
    response.writeHead(200,{'Content-type':'text/plain'});
    response.write("Welcome to Clarity TTS");
    response.end("Thank you");

//}).listen(8081);
console.log("success");