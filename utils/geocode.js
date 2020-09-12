const request = require('postman-request')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?limit=1&access_token=pk.eyJ1IjoiZ2hpam9vbiIsImEiOiJjazEwa2V0MXYwNnJwM2JteWhiZmY1anNpIn0.MgqLIiJYw1259w5n_vbA_A`

  request({ url: url, json: true }, (err, response) => {
    if (err) {
      callback('Unable to connect to the location service.', undefined)
      // set the first argument of the callback as the err argument, and the second argument as undefined
    } else if (response.body.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined)
      // set the first argument of the callback as the err argument, and the second argument as undefined
    } else {
      const data = response.body.features[0]
      callback(undefined, {
        location: data.place_name,
        latitude: data.center[1],
        longitude: data.center[0]
      })
      // set the first argument of the callback as undefined, and the second argument as the response data
    }
  })
}

module.exports = geocode