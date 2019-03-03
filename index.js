var
  express = require('express'),
  url = require('url'),
  fs = require('fs'),
  mongoose = require('mongoose'),
  path = require('path'),
  passwordHash = require('password-hash');


const app = express();
const PORT = process.env.PORT || 5300;


app.set('view engine', 'ejs');
app.set('views','./views');

var path = require('path');
app.use('/static',express.static(__dirname + '/public'));



app.get('/', function(req, res) {
  res.render('first');
});

app.get('/tender', function(req, res) {
  res.render('tender');
});

app.get('/home', function(req, res) {
  res.render('main');
});

app.get('/req1', function(req, res) {
  res.render('req1');
});

app.get('/req2', function(req, res) {
  res.render('req2');
});


app.get('/req3', function(req, res) {
  res.render('req3');
});

app.get('/req4', function(req, res) {
  res.render('req4');
});

app.get('/chatbot', function(req, res) {
  res.redirect('');
});

app.get('/home', function(req, res) {
  res.render('front');
});


app.get('/car', function(req, res) {
  res.render('car');
});


app.get('/download1bid', function(req, res) {
  res.render('linking');
});

app.listen(PORT);