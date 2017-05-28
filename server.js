var app        = require('express')()
var bodyParser = require('body-parser')
var helmet     = require('helmet')
var router     = require('./modules/router')
var PORT = 8080

app.dirname = __dirname
app.use(helmet())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/', (request, response) => {
  console.log(`starting /`);
  response.sendFile(__dirname + '/views/index.html')
})
app.get('/*', (request, response) => {
  // router(request, response, app)
  response.sendFile(__dirname + request._parsedUrl.pathname)
})

app.listen(PORT, () => {
  console.log(`--------------------- APP RUNNING ON :8080 --------------------`);
})
