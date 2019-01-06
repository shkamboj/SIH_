const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.send('hi Gopesh');
});

app.listen(PORT);