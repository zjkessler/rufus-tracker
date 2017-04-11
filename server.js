'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var port = process.env.PORT || 9000;
var env = process.env.NODE_ENV || 'development'
var mongoURI = 'mongodb:heroku_6x5bn9zt: 6 mmd0alhtfnhv0ccvmv3qs7agc @ds159050.mlab.com: 59050 / heroku_6x5bn9zt';

app.use(bodyParser.json());

//connect front end to back end\\
app.use(express.static(path.join('./public/')));

//route\\
app.use('/upgrades', require('./backend/routes/upgrade-routes'));

//DB connection
if (env === 'development') {
	mongoose.connect('mongodb://localhost/4runner', function () {

		console.log('connected to database...');
	});
} else {
	mongoose.connect(mongoURI);
}


app.listen(port, function () {
	console.log("listening on port " + port);
});
