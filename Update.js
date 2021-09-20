var express=require('express');
var app=express();
var fs=require('fs');

var student={
    student2:{
        "name":"Shalini",
        "id"  :"2",
        "Dept":"Civil"
    }
}

app.put('/update',function(req,res)
{
    fs.readFile(__dirname+"/"+"StudentDetails.json",function(err,data)
    {
        data=JSON.parse(data);
        data["student2"]=student["student2"];
        console.log(data);
        res.end(JSON.stringify(data));
    })
})
app.listen(8080);
console.log("Program is running");