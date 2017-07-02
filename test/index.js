const data  =  require('../data')
describe('Tests', () => {
  describe('testing data module', () => {
    console.log(`tests starting`);
    require('./data_tests')(data)
  })
})
