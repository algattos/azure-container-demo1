'use strict';

const express = require('express')
  , stylus = require('stylus')
  , nib = require('nib');

// Constants
const PORT = 8080;

// App
var app = express()
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

// The app section to present the index
app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
})

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);