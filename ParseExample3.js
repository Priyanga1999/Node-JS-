const fs = require('fs')
const fileContents = fs.readFileSync('./file.json', 'utf8')

try {
  const data = JSON.parse(fileContents)
  console.log(data)
  console.log(typeof(data))
} catch(err) {
  console.error(err)
}