let Promise = require('bluebird')


let getVariants = new Promise( (resolve,reject) => {
  $.get('./data/variants.json', (response) => {
    resolve(response)
  }).fail(() => {
    reject(new Error('Cannot get variants json'))
  })
})

export default getVariants
