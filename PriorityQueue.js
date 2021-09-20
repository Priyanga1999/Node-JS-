var async=require('async');
var q = async.priorityQueue(function(task, callback) {
    console.log('Hello ' + task.name);
    callback();
  }, 1);
  
  
  q.drain = function() {
    console.log('All items have been processed');
  };
  
  
  q.push({name: 'foo'}, 2, function(err) {
    console.log('Finished processing foo');
  });
  
  q.push({name: 'bar'}, 3, function (err) {
    console.log('Finished processing bar');
  });
  
  
  q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], 1, function(err) {
    console.log('Finished processing item');
  });