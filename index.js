var
  express = require('express'),
  url = require('url'),
  fs = require('fs'),
  path = require('path'),
  app = express(),
  quizzer = require('node-quizzer'),
  _ = require('underscore-node');

  app.set('port', (process.env.PORT || 5000));


app.get('/', function(req, res) {
  res.send("HI");
});



app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'));
});