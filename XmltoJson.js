const xml2js = require('xml2js');
const xml = `<?xml version="1.0" encoding="UTF-8" ?>
            <user id="1">
                <name>John Doe</name>
                <email>john.doe@example.com</email>
                <roles>
                    <role>Member</role>
                    <role>Admin</role>
                </roles>
                <admin>true</admin>
            </user>`;
            console.log(typeof(xml));
           
xml2js.parseString(xml, (err, data) => {
console.log(data);
console.log(typeof(data));
    if(err) {
        throw err;
    }

const json = JSON.stringify(data);//data is a JS Object so we convert into JSON String
console.log(json);
console.log(typeof(json));
    
});