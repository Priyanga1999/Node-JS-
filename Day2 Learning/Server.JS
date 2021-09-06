var http=require('http');
var server=http.createServer(function(req,res)
{
    if(req.url=='/')
    {
        res.writeHead(200,{'Content-Type':'text/plain text'});
        res.write("this is home page");
        res.end();
    }
    if(req.url=="/student")
    {
        res.writeHead(200,{'Content-Type':'text/plain text'});
        res.write("this is student page");
        res.end();
    }
    if(req.url=="/admin")
    {
        res.writeHead(200,{'Content-Type':'text/plain text'});
        res.write("this is admin page");
        res.end();
    }
    else{
        res.end("Invalid Request");
    }
});
server.listen(8081);
console.log('Node.js web server at port 8081 is running..');