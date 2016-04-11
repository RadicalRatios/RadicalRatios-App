/**
 *  Set up ======================================================================
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var router = express.Router();

/**
 *  Configuration, Routes =======================================================
 */
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', require('./routes/session.routes'));

/**
 *  Define model ================================================================
 */


// Client routes:
app.use('/', express.static(__dirname + '/public')); // defaults to index.html

/**
 *  Listen (start app with node server.js) ======================================
 */
app.listen(port);
console.log('Magic happens on port ' + port);
