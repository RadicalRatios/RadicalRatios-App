/**
 *  Set up ======================================================================
 */
var express = require('express');
var app = express();                 
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var port = process.env.PORT || 8080;
var router = express.Router();

/**
 *  Configuration ===============================================================
 */
mongoose.connect('mongodb://Admin:FormerlyWhyhigh@ds043972.mongolab.com:43972/heroku_app37584629');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);

/**
 *  Define model ================================================================
 */
var Truck = require('./models/Truck');
var User = require('./models/User');
var Contact = require('./models/Contact');

/**
 *  Routes ======================================================================
 */
router.route('/trucks')
	.post(function(req, res) {
		var newTruck = new Truck();

		newTruck.name = req.body.name;
		newTruck.location.latitude = req.body.location.latitude;
		newTruck.location.longitude = req.body.location.longitude;

		newTruck.save(function(err) {
            if (err) {
                res.send(err);
            } else {
            	res.json({message: 'Truck created!'});
        	}
        });
	})
	.get(function(req, res) {
		Truck.find(function(err, trucks) {
			if (err) {
				res.send(err);
			} else {
				res.json(trucks);
			}
		});
	});

router.route('/trucks/:id')

	.post(function(req, res) {
		Truck.findById(req.params.id, function(err, truck) {
            if (err) {
                res.send(err);
            }

            truck.name = req.body.name;
			truck.location.latitude = req.body.location.latitude;
			truck.location.longitude = req.body.location.longitude;

			truck.save(function(err) {
	            if (err) {
	                res.send(err);
	            } else {
	            	res.json({message: 'Truck updated!'});
	        	}
	        });
        });
	})

	.get(function(req, res) {
        Truck.findById(req.params.id, function(err, truck) {
            if (err) {
                res.send(err);
            }
            res.json(truck);
        });
    })

    .delete(function(req, res) {
        Truck.remove({
            _id: req.params.id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Truck deleted' });
        });
    });

router.route('/user')

	.post(function(req, res) {
		var newUser = new User();

		newUser.truckName = req.body.truckName;
		newUser.email = req.body.email;
		newUser.password = req.body.password;

		newUser.save(function(err) {
            if (err) {
                res.send(err);
            } else {
            	res.redirect('/home.html');
        	}
        });
	});

router.route('/contact')

	.post(function(req, res) {
		var contact = new Contact();
		contact.email = req.body.email;

        contact.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.send({'message': 'Added contact'});
            }
        });
	});

// Client routes:
app.use('/', express.static(__dirname + '/public')); // defaults to index.html

/**
 *  Listen (start app with node server.js) ======================================
 */
app.listen(port);
console.log('Magic happens on port ' + port);
