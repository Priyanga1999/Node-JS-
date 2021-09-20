var async=require('async');
async.race([
    function (callback) {
      setTimeout(function () {
        callback(null, 'one');
      }, 300);
    },
    function (callback) {
      setTimeout(function () {
        callback(null, 'two');
      }, 100);
    },
    function (callback) {
      setTimeout(function () {
        callback(null, 'three');
      }, 200);
    }
  ],
    
    function (err, result) {
      
      console.log('The result is ', result);
    });