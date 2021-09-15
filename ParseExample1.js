const data = '{ "name": "Flavio", "age": 35 }'
console.log(data);
console.log(typeof(data));
try {
  const user = JSON.parse(data)
  console.log(user);
  console.log(typeof(user));
} catch(err) {
  console.error(err)
}