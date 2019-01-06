var
  express = require('express'),
  url = require('url'),
  fs = require('fs'),
  path = require('path'),
  app = express(),
  quizzer = require('node-quizzer'),
  _ = require('underscore-node'),
  getQuiz = function(method, req) {
    var urlParts = url.parse(req.url, true),
      query = urlParts.query,

      // generate random quiz
      quiz = quizzer[method]({
        uname: query.fullname,
        uemail: query.email,
        name: query.quiz,
        count: parseInt(query.count),
        time: parseInt(query.time),
        perc: parseInt(query.perc)
      });

    return quiz;
  };

  app.set('port', (process.env.PORT || 5000));


app.get('/', function(req, res) {
  res.send("HI");
});



app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'));
});