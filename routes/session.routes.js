var express = require('express'),
    router = express.Router();

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
        //  if (err) {
        //      res.send(err);
        //  } else {
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
    })

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

module.exports = router;
