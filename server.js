/**
 *  Set up ======================================================================
 */
var express = require('express'),
    mailer = require('express-mailer'),
    bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 8080;

/**
 *  Configuration, Routes =======================================================
 */
// Configure app to use bodyParser(); This will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup Routes
app.use('/api', require('./routes/session.routes'));

// Setup mailer
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

mailer.extend(app, {
    from: 'no-reply@radicalratios.com',
    host: 'smtp.gmail.com', // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
    auth: {
        user: 'radicalratios2016@gmail.com',
        pass: 'uwmcapstone'
    }
});

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
