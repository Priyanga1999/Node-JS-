var express=require('express');
var app=express();
var fs=require('fs');

var student={
    student4:{
        "name":"Malini",
        "id"  :"4",
        "Dept":"Civil"
    }
}

app.post('/addStudent',function(req,res)
{
    fs.readFile(__dirname+"/"+"StudentDetails.json",function(err,data)
    {
        data=JSON.parse(data);
        data["student4"]=student["student4"];
        console.log(data);
        res.end(JSON.stringify(data));
    })
})
app.listen(8080);
console.log("Program is running");