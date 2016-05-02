var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    Game = require('./Game');

var Student = new Schema({
    name: String,
    scores: { type : Array , "default" : [] } // [ { game: Game, score: Number } ]
});

module.exports = mongoose.model('Student', Student);