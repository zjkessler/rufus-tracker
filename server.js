var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var port = process.env.PORT || 9000;

app.use(bodyParser.json());

//connect front end to back end\\
app.use(express.static(path.join('./public/')));

//route\\
app.use('/upgrades', require('.backend/routes/upgrade-routes'));

//DB connection
mongoose.connect('mongodb://localhost/4runner', function () {
	'use strict';
	console.log('connected to database...');
});


app.listen(port, function () {
	console.log("listening on port " + port);
});
