module.exports = (data) => {
  const assert    =  require('assert')
  const chai      =  require('chai')
  const should    =  chai.should()
  const provider  =  data().provider

  describe('Data functions tests', () => {
    describe('Provider tests', () => {
      it('it should get data', done => {
        provider.then((success) => {
          success.should.be.an('array')
          done()
        }, (err) => {
          done(err)
        })
      })
    })
  })
}
