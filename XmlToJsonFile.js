const xml2js = require('xml2js');
const fs = require('fs');


const xml = fs.readFileSync('Example.xml');


xml2js.parseString(xml, (err, result) => {
    if (err) {
        throw err;
    }

    
const json = JSON.stringify(result, null, 4);
console.log(json);
fs.writeFileSync('user.json', json);

}); 