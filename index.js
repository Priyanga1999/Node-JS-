// const express=require('express');
// const app=express();
// const port=8000;


// app.get('/',(req,res)=>res.send("Welcome to Clarity TTS"))
// app.listen(3000,()=>console.log("Sever is running"));
var express=require('express')
var app=express();

app.get('/',function(req,res)
{
    res.sendFile(__dirname+"/"+"SampleProgram.html");
})
app.get('/home',function(req,res)
{
    res.send('<h1>welcome'+req.query['username']+'</h1><br><h2>Mail ID: '+req.query['mailid']+'</h2>');
})
app.listen(8080);