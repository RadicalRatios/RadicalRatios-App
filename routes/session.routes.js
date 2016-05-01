var express = require('express'),
    router = express.Router();

// Define models
var Student = require('../models/Student');
var Game = require('../models/Game');
var Session = require('../models/Session');

router.route('/session')

    /*
    * Returns new Session
    */
    .post(function(req, res) {

        var newSession = new Session();
        newSession.createKey();

        if (req.app && req.body.email) {
            newSession.email = req.body.email
            console.log(newSession);

            req.app.mailer.send('sample-email', {
                to: req.body.email, // REQUIRED. This can be a comma delimited string
                subject: 'Test Email', // REQUIRED.
                // Local params for email template:
                emailAddress: req.body.email,
                key: newSession.key
            }, function (err) {
                if (err) {
                    // handle error
                    console.log(err);
                    res.send('There was an error sending the email');
                    return;
                }
                console.log('Email sent!');
            });
        }

        res.json({
            session: newSession
        });
    })

    /*
    * Returns all Sessions
    */
    .get(function(req, res) {
        Session.find(function(err, sessions) {
            if (err) {
                res.send(err);
            } else {
               res.json({sessions: sessions});
            }
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
        Truck.remove({
            _id: req.body._id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Truck deleted' });
        });

        res.json({ message: 'Session ended' });
    });

router.route('/games')

    /*
    * Returns all Games
    */
    .get(function(req, res) {
        Game.find({}, function (err, gameDocs) {
            res.json(gameDocs);
        });
    });

router.route('/session/:id/game/:gameId/student/:studentId')

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
