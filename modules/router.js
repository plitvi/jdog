var app = require('express')()
var RESPONSE

function router(request, response, app) {
  RESPONSE = response
  app       = app || ''
  var _PATH            = request._parsedUrl.pathname
  var BOWER_PATH       = app.dirname + '/bower_components/'
  var BOOTSTRAP_PATH   = BOWER_PATH + 'bootstrap/dist'
  var JQUERY_PATH      = BOWER_PATH + 'jquery/dist'
  var JQUERY_UI_PATH   = BOWER_PATH + 'jquery-ui'
  var REQUIREJS_PATH   = BOWER_PATH + 'requirejs'
  var SCRIPTS_PATH     = app.dirname + '/scripts'
  var IMAGES_PATH      = app.dirname + '/images'
  var ASSETS_PATH      = app.dirname + '/assets'
  var ICONS_PATH       = ASSETS_PATH + '/icons'
  var FONTS_PATH       = ASSETS_PATH + '/fonts'

  console.log(`Started ${_PATH}`);

  if(_PATH === '/') {
    fileSender(app.dirname + '/views/index.html')
  }
  if(_PATH.startsWith('/fontawesome-webfont')){
    fileSender(app.dirname + '/bower_components/font-awesome/fonts' + request._parsedUrl.pathname)
  }
  if(_PATH === '/requirejs'){
    fileSender(REQUIREJS_PATH + '/require.js')
  }
  if(_PATH === '/main.css'){
    fileSender(app.dirname + '/assets/css/main.css')
  }
  if(_PATH === '/jquery.min.js') {
    fileSender(JQUERY_PATH + _PATH)
  }
  if(_PATH === '/jquery-ui.min.js'){
    fileSender(JQUERY_UI_PATH + _PATH)
  }
  if(_PATH === '/main.js'){
    fileSender(SCRIPTS_PATH + _PATH)
  }
  if(_PATH === '/application.js'){
    fileSender(SCRIPTS_PATH + _PATH)
  }
  if(_PATH === '/util.js') {
    fileSender(SCRIPTS_PATH + _PATH)
  }
  if(_PATH === '/skel.min.js'){
    fileSender(SCRIPTS_PATH + _PATH)
  }
  if(_PATH.startsWith('/images')) {
    fileSender(app.dirname + _PATH)
  }
  if(_PATH === '/font-awesome.min.css') {
    fileSender(FONTAWESOME_PATH + '/css' + _PATH)
  }
  // if(_PATH.startsWith('/assets')){
  //   fileSender(app.dirname + _PATH)
  // }
  if(_PATH.startsWith('/fonts')) {
    fileSender(ASSETS_PATH + _PATH)
  }
  if(_PATH === '/bootstrap.min.js') {
    fileSender(BOOTSTRAP_PATH + '/js' +  _PATH)
  }
  if(_PATH === '/bootstrap.min.css'){
    fileSender(BOOTSTRAP_PATH + '/css' + _PATH)
  }
  if(_PATH.startsWith('/icons')){
    fileSender(ASSETS_PATH + _PATH)
  }

}
function fileSender(_path) {
  try {
    RESPONSE.sendFile(_path)
  } catch(exception){
    console.log(`ERR: | ${exception}`);
  }
}


module.exports = router
