var express=require('express')
var app=express()
var fs=require('fs')

app.get('/listOfStudents',function(req,res)
{
    fs.readFile(__dirname+"/"+"StudentDetails.json",function(err,data)
    {
        console.log(data.toString());
        res.end(data);
    });
})
app.listen(8080);
console.log("Server 8080 is running");
