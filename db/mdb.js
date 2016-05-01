var MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    Game = require('../models/Game');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Connected to DB!');
  setupDatabase();
});

function setupDatabase() {
    // Create 4 games:
    // First, check for the games...
    Game.find({ }, function (err, docs) {
        console.log(err);
        console.log(docs);
        if (docs.length = 0) {
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
