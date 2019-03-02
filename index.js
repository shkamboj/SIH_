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



app.get('/', function(req, res) {
  res.send('the losers');
});


app.get('/header', function(req, res) {
  res.render('linking');
});

app.listen(PORT);