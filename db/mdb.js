var MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    Game = require('../models/Game');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // We're connected!
  console.log('Connected to DB!');
  setupDatabase();
});

function setupDatabase() {
    // Create 4 games:
    // First, check for the games...
    Game.find({}, function (err, gameDocs) {
        console.log('Current games:');
        console.log(gameDocs);
        // Second, if they aren't in the DB, create them
        if (gameDocs.length = 0) {
            for (var i = 1; i < 5; ++i) {
                var newGame = new Game();
                newGame.name = 'Game' + i;
                console.log('Creating ' + newGame.name + ' ...');
                // ...do insert
                newGame.save(function (err, game) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log('Created ' + game);

                });
            }
        }
    });

}
