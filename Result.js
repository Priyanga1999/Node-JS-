var express=require('express');
var app=express();
const request = require('request')


app.get('/result',function(req,res)
{
	var url = "http://localhost:8080/listOfStudents";
    request(url, (error, response, body)=>
	{
	if(error) console.log(error)
	
	console.log(response.statusCode);
	console.log(body);
    res.send(body);
    })
})
app.listen(3000);
console.log("Program is running");
