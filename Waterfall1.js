const async = require('async')
async.waterfall([
    myFirstFunction,
    mySecondFunction,
    myLastFunction,
  ], function(err, result) {
    
    console.log(result);
  });
  
  function myFirstFunction(callback) {
    callback(null, 'Task 1', 'Task 2');
  }
  function mySecondFunction(arg1, arg2, callback) {
    
    let arg3 = arg1 + ' and ' + arg2;
    callback(null, arg3);
  }
  function myLastFunction(arg1, callback) {
    
    arg1 += ' completed';
    callback(null, arg1);
  }