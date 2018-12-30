var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');


var app = express();
app.set('port', (process.env.PORT || 5000));





app.get('/',function(req,res){
  res.render('main');
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
