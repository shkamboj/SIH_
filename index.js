var
  express = require('express'),
  url = require('url'),
  fs = require('fs'),
  mongoose = require('mongoose'),
  path = require('path'),
  passwordHash = require('password-hash');


const app = express();
const PORT = process.env.PORT || 5000;



app.get('/', function(req, res) {
  res.send('the losers');
});

app.listen(PORT);