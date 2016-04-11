/**
 *  Set up ======================================================================
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var router = express.Router();

/**
 *  Configuration ===============================================================
 */
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);

/**
 *  Define model ================================================================
 */

/**
 *  Routes ======================================================================
 */
router.route('/session')

    /*
    * Returns new Session
    */
	.post(function(req, res) {
    	res.json({
            key: 1234567890
        });
	})

    /*
    * Returns all Sessions
    */
	.get(function(req, res) {
		// Truck.find(function(err, trucks) {
		// 	if (err) {
		// 		res.send(err);
		// 	} else {
        //      res.json(trucks);
        //  }
        // });
		res.json({
            sessions: [1234567890]
        });
	});

router.route('/session/:id')

    // Not sure if 'post' is needed for this endpoint
    .post(function(req, res) {
        // Truck.findById(req.params.id, function(err, truck) {
        //     if (err) {
        //         res.send(err);
        //     }

        //     truck.name = req.body.name;
        //     truck.location.latitude = req.body.location.latitude;
        //     truck.location.longitude = req.body.location.longitude;

        //     truck.save(function(err) {
        //         if (err) {
        //             res.send(err);
        //         } else {
        //             res.json({message: 'Truck updated!'});
        //         }
        //     });
        // });

        // TODO:
        res.json({
            id: 123
        });
    })

    /*
    * Returns Session
    */
    .get(function(req, res) {
        // Truck.findById(req.params.id, function(err, truck) {
        //     if (err) {
        //         res.send(err);
        //     }
        //     res.json(truck);
        // });

        // TODO:
        res.json({
            id: 123,
            students: [{name: 'Johnny Kid'}, {name: 'Jimmy Kid'}]
        });
    })


    /*
    * Deletes Session, empty return (?)
    */
    .delete(function(req, res) {
        // Truck.remove({
        //     _id: req.params.id
        // }, function(err, bear) {
        //     if (err)
        //         res.send(err);

        //     res.json({ message: 'Truck deleted' });
        // });

        // TODO:
        res.json({ message: 'Session ended' });
    });

router.route('/session/:id/games/:gameId')

    /*
    * Returns Game
    */
    .get(function(req, res) {

        // TODO:
        res.json({
            id: 123,
            gameName: 'Game X',
            students: [{name: 'Johnny Kid', score: 21}, {name: 'Jimmy Kid', score: 22}]
        });
    });

router.route('/session/:id/games/:gameId/student/:studentId')

    /*
    * Returns Student score
    */
    .get(function(req, res) {

        // TODO:
        res.json({
            id: 123,
            game: {
                id: 123,
                name: 'Game X'
            },
            student: {
                id: 123,
                name: 'Jimmy Kid',
                scope: 21
            }
        });
    });

    /*
    * Used for starting game, updating score w/ progession
    * Returns updated Student score
    */
    .post(function(req, res) {

        // TODO:
        res.json({
            id: 123,
            game: {
                id: 123,
                name: 'Game X'
            },
            student: {
                id: 123,
                name: 'Jimmy Kid',
                scope: 21
            }
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
