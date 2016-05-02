var MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    Student = require('../models/Student'),
    Game = require('../models/Game'),
    Session = require('../models/Session');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // We're connected!
  console.log('Connected to DB!');
  cleanDB();
});

function cleanDB() {
    console.log('Cleaning out the dusty ol\' database...');

    Game.remove({}, function (err, gameDocs) {
        console.log('Games deleted: ' + gameDocs);
    });
    Student.remove({}, function (err, studentDocs) {
        console.log('Students deleted: ' + studentDocs);
    });
    Session.remove({}, function (err, sessionDocs) {
        console.log('Sessions deleted: ' + sessionDocs);
    });

}
