
const async = require('async')
var q = async.queue(function(task, callback) {
  console.log('Hello ' + task.name);
  callback();
}, 2);


q.drain = function() {
  console.log('All items have been processed');
};


q.push({name: 'foo'}, function(err) {
  console.log('Finished processing foo');
});

q.push({name: 'bar'}, function (err) {
  console.log('Finished processing bar');
});


q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
  console.log('Finished processing item');
});


q.unshift({name: 'bar'}, function (err) {
  console.log('Finished processing bar');
});
