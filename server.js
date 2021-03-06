var app        = require('express')()
var bodyParser = require('body-parser')
var helmet     = require('helmet')
const morgan   = require('morgan')
var PORT = 8080
app.__dirname = __dirname

// app.use(helmet())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('./routes')(app)

app.listen(PORT, () => {
  console.log(`--------------------- APP RUNNING ON :8080 --------------------`);
})
