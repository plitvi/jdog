const Promise = require('bluebird')
const DATA  =  require('./variants.json')

const getVariants = new Promise( (resolve, reject) => {
  resolve(DATA)
})

module.exports = getVariants
