module.exports = function(app) {
  app.get('/', (request, response) => {
    response.sendFile(app.__dirname + '/views/index.html')
  })
  app.get('/glyphicons-*', (req, res) => {
    res.sendFile(app.__dirname + '/public' + req._parsedUrl.pathname)
  })
  app.get('/public/main.js.gz', (req, res) => {
    res.setHeader('content-encoding', 'gzip')
    res.sendFile(app.__dirname + req.path)
  })
  app.get('/public/*', (request, response) => {
    response.sendFile(app.__dirname + request._parsedUrl.pathname)
  })
  app.get('/*', (request, response) => {
    response.sendFile(app.__dirname + request._parsedUrl.pathname)
  })
}
