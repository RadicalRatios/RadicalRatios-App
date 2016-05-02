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

            newSession.save(function(err, sessionDoc) {
                if (err) {
                    res.send(err);
                } else {
                    req.app.mailer.send('sample-email', {
                        to: req.body.email, // REQUIRED. This can be a comma delimited string
                        subject: 'Test Email', // REQUIRED.
                        // Local params for email template:
                        emailAddress: req.body.email,
                        key: sessionDoc.key
                    }, function (err) {
                        if (err) {
                            // handle error
                            console.log(err);
                            res.send('There was an error sending the email');
                            return;
                        }
                        console.log('Email sent!');
                    });

                    // Send response with new sessino
                    res.json({
                        session: sessionDoc
                    });
                }
            });
        }
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

    /*
    * Returns Session
    */
    .get(function(req, res) {
        Session.findById(req.params.id, function(err, sessionDoc) {
            if (err) {
                res.send(err);
            }
            res.json(sessionDoc);
        });
    })

    /*
    * Deletes Session, empty return (?)
    */
    .delete(function(req, res) {

        Session.findOne( { key: req.params.id}, function(err, sessionDoc) {

            req.app.mailer.send('session-end', {
                    to: sessionDoc.email, // REQUIRED. This can be a comma delimited string
                    subject: 'Test Email', // REQUIRED.
                    // Local params for email template:
                    emailAddress: sessionDoc.email,
                    key: sessionDoc.key,
                    session: sessionDoc
                }, function (err) {
                    if (err) {
                        // handle error
                        console.log(err);
                        res.send('There was an error sending the email');
                        return;
                    }
                    console.log('Email sent!');
                });

            // Remove session
            Session.remove({
                _id: sessionDoc._id
            }, function(err, bear) {
                if (err) {
                    res.send(err);
                }

                res.json({ message: 'Session deleted' });
            });

            res.json({ message: 'Session ended' });

        });

    });

router.route('/session/:id/student')

    /*
    * Creates a Student, Adds to session; Returns Student
    */
    .post(function(req, res) {
        var sessionKey = req.params.id;

        Session.findOne({ key: sessionKey}, function(err, sessionDoc) {
            if (!err && sessionDoc) {

                var newStudent = new Student();
                newStudent.name = req.body.name;

                newStudent.save(function (err, studentDoc) {
                    if (err) {
                        res.send(err);
                    }
                    // Create Game 1-4
                    var game = 'Game';

                    for (var i = 1; i < 5; ++i) {
                        var newGame = new Game();
                        newGame.name = game + i;
                        newGame.score = 0;

                        newStudent.games.push(newGame);
                        newGame.save();
                    }

                    sessionDoc.students.push(studentDoc);

                    sessionDoc.save(function(err, sessionDoc) {
                        res.json(studentDoc);
                    });
                });

            } else {
                res.json(err);
            }
        });
    });

router.route('/session/:id/student/:id')

    /*
    * Returns Student
    */
    .get(function(req, res) {
        Student.findById(req.params.id, function(err, sessionDoc) {
            if (err) {
                res.send(err);
            }
            res.json(sessionDoc);
        });

    });

router.route('/session/:id/student/:studentId/game/:gameId')

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
