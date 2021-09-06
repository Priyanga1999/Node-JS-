var fs=require('fs');
fs.appendFile('test.txt','Welcome To Clarity TTS!',function(err)
{
    if(err) throw error;
    else{
        console.log("Appended file successfully added");
    }
})