const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=5ec956c24e2a6a7adb9c59ce3cb09e03&query=${latitude},${longitude}`

  request({ url: url, json: true }, (err, response) => {
    if (err) {
      callback('Unable to connect to the forecast service.', undefined)
      // set the first argument of the callback as the err argument, and the second argument as undefined
    } else if (response.body.error) {
      callback('Unable to find location.', undefined)
      // set the first argument of the callback as the err argument, and the second argument as undefined
    } else {
      const data = response.body.current
      const message = 'It is currently ' + data.temperature + ' degrees out and feels like ' + data.feelslike + ' degrees'
      callback(undefined, message)
      // set the first argument of the callback as undefined, and the second argument as the response data
    }
  })
}

module.exports = forecast
