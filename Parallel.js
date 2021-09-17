const async = require('async')
async.parallel([
    function(callback) {
      setTimeout(function() {
        console.log('Task One');
        callback(null, 1);
      }, 2000);
    },
    function(callback) {
      setTimeout(function() {
        console.log('Task Two');
        callback(null, 2);
      }, 1000);
    }
  ],
  function(err, results) {
    console.log(results);
    
  });
  
  // an example using an object instead of an array
  
  
  
  
  async.parallel({
    task1: function(callback) {
      setTimeout(function() {
        console.log('Task One');
        callback(null, 1);
      }, 2000);
    },
    task2: function(callback) {
      setTimeout(function() {
        console.log('Task Two');
        callback(null, 2);
      }, 1000);
      }
  }, function(err, results) {
    console.log(results);
    
  });

  