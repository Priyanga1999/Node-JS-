var express=require('express');
var app=express();
var alert=require('alert');
var router=express.Router();

router.use(function(req,res,next)
{
    alert("Middleware1 is running");
    console.log("Request method is",req.method,"and",req.url,"url address page is running");
    next();
});
app.get('/',function(req,res,next)
{
    console.log("Main Page");
    res.send("Lets go the the home page");
    next();
    
})
app.get('/clarity',function(req,res,next)
{
    console.log("First Page");
    res.send("Welcome to Clarity TTS");
    next();
    
})
router.get('/contact',function(req,res,next)
{
    console.log("Second Page");
    res.send("Contact me on LinkedIn");
    next();
    
})
router.get('/exit',function(req,res,next)
{
    console.log("Third Page");
    res.send("Thank you");
    next();
})
app.use('/clarity',router);
app.listen(8080);