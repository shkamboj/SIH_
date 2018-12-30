var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');


var app = express();
app.set('port', (process.env.PORT || 5000));

// var uri ='mongodb://shkamboj:qwerty123@localhost:27017/open_elec16?authSource=admin'; 

var uri = 'mongodb://amit:amit123@ds237072.mlab.com:37072/quizapp';

 
mongoose.connect(uri);





app.get('/',function(req,res){
  res.send('quebec');
});



app.set('view engine', 'ejs');
app.set('views','./views');

var path = require('path');
app.use('/static',express.static(__dirname + '/public'));

const url = require('url');


app.use(cookieParser());




 



app.set("view options", { layout: false } );
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));









app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'));
});
