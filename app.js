const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// get the address from the console input
const address = process.argv[2]

if (!address) {
  return console.log('Please provide an address')
}

// set the address from console input as the input parameter
geocode(address, (err, { location, latitude, longitude } = {}) => {
  if (err) {
    return console.log(err)
  }

  forecast(latitude, longitude, (err, forecastData) => {
    if (err) {
      return console.log(err)
    }

    console.log(location)
    console.log(forecastData)
  })
})
