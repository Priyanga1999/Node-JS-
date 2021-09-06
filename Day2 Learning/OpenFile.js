var fs=require('fs');
const { isBuffer } = require('util');
fs.open('test.txt','r',function(err,fd)
{
    if(err)
    {
    return console.log(err);
    }
    var buffr=new Buffer(1024);
    fs.read(fd,buffr,0,buffr.length,0,function(err,bytes)
    {
        if(err) throw err;
        if(bytes>0)
        {
            console.log(buffr.slice(0,bytes).toString());
        }
        fs.close(fd,function(err)
        {
            if(err) throw err;
        })
    })
})




