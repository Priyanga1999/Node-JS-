var express=require('express');
var app=express();
var fs=require('fs')
var id=2;

app.delete("/deleteData",function(req,res)
{
    fs.readFile(__dirname+"/"+"StudentDetails.json",function(err,data)
    {
        data=JSON.parse(data);
        delete data["student2"];
        console.log(data);
        res.end(JSON.stringify(data));
    })
})
app.listen(8080);
console.log("Program is running");