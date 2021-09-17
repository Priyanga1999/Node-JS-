function fastFunction () {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        console.log('Fast function done')
        resolve()
      }, 1000)
    })
  }
  function slowFunction () {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        console.log('Slow function done')
        resolve()
      }, 3000)
    })
  }
  function asyncRunner () {
      return Promise.all([slowFunction(), fastFunction()])
  }
  let result=asyncRunner();
  console.log(result)