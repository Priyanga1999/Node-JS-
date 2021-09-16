var jsonxml = require('jsontoxml');
 
var xml = jsonxml(
    {
        "user1" : {
           "name" : "mahesh",
           "password" : "password1",
           "profession" : "teacher",
           "id": 1
        },
        
        "user2" : {
           "name" : "suresh",
           "password" : "password2",
           "profession" : "librarian",
           "id": 2
        },
        
        "user3" : {
           "name" : "ramesh",
           "password" : "password3",
           "profession" : "clerk",
           "id": 3
        }
     })
     console.log(xml);