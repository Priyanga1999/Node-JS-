var express=require('express')
var app=express();

app.get('/',function(req,res)
{
    res.sendFile(__dirname+"/"+"SampleProgram.html");
})
app.get('/home',function(req,res)
{
    res.send('<h1>welcome  '+req.query['username']+'</h1><br><h2>Mail ID: '+req.query['mailid']+'</h2>');
})
app.listen(8080);