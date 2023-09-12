const fetch = require('node-fetch')

const getPeople = () => {
  return fetch('https://swapi.dev/api/people')
    .then((res) => res.json())
    .then((data) => {
      return {
        count: data.count,
        results: data.results,
      }
    })
    .catch((err) => err)
}

module.exports = getPeople
