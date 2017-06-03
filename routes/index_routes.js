module.exports = function(app) {
  app.get('/', (request, response) => {
    console.log(`starting /`);
    response.sendFile(app.__dirname + '/public/assets/index.html')
  })
  app.get('/glyphicons-*', (req, res) => {
    res.sendFile(app.__dirname + '/public/assets' + req._parsedUrl.pathname)
  })
  app.get('/main.js', (request, response) => {
    console.log(`Starting ${request._parsedUrl.pathname}`);
    response.sendFile(app.__dirname + '/public/assets/' + request._parsedUrl.pathname)
  })
  app.get('/*', (request, response) => {
    console.log(`Starting ${request._parsedUrl.pathname}`);
    // router(request, response, app)
    response.sendFile(app.__dirname + request._parsedUrl.pathname)
  })
}
