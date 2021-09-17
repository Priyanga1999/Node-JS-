const async=require('async');
async.series([
    function(callback)
    {
        setTimeout(function()
        {
            console.log("series1");
            callback(null,"result1");
        },2000)
    },
    function(callback)
    {
        setTimeout(function()
        {
            console.log("series2");
            callback(null,"result2");
        },1000)
    }
],
function(err,results)
{
    console.log(results);
}
)

async.series({
    task1:function(callback)
    {
        setTimeout(function()
        {
       console.log("Task1 completed"),
        callback(null,"TASK1")
        },3000);
    },
    task2:function(callback)
    {
        setTimeout(function()
        {
       console.log("Task2 completed"),
        callback(null,"TASK2")
        },2000);
    }
},
function(err,results1)
{
    console.log(results1);
})