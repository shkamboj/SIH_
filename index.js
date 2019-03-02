var
  express = require('express'),
  url = require('url'),
  fs = require('fs'),
  mongoose = require('mongoose'),
  path = require('path'),
  passwordHash = require('password-hash');


const app = express();
const PORT = process.env.PORT || 5100;


app.set('view engine', 'ejs');
app.set('views','./views');

var path = require('path');
app.use('/static',express.static(__dirname + '/public'));



app.get('/', function(req, res) {
  res.send('the losers');
});

app.get('/tender', function(req, res) {
  res.render('tender');
});


app.get('/header', function(req, res) {
  res.render('linking');
});

app.listen(PORT);