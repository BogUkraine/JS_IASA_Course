var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: fallse });

app.get('/about', function(req, res) {
    res.render('about');
});

app.post('/about', urlencodedParser, function(req, res) {
    if(!req.body) return console.log('No Data');
    console.log(req.body);
    res.render('about');
});
