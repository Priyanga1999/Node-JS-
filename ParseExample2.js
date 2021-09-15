const parseJsonAsync = (jsonString) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(JSON.parse(jsonString))
      })
    })

  }
  
  const data = '{ "name": "Flavio", "age": 35 }'
  console.log(data)
  console.log(typeof(data))
  parseJsonAsync(data).then(jsonData =>{

       console.log(jsonData)
       console.log(typeof(jsonData))
  })
