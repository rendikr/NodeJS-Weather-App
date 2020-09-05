const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=5ec956c24e2a6a7adb9c59ce3cb09e03&query=37.8267,-122.4233'

request(url, (err, response) => {
  const data = JSON.parse(response.body)
  console.log(data.current)
})
