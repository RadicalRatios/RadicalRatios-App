var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    Game = require('./Game');

var Student = new Schema({
    name: String,
    // scores: [ { game: Game, score: Number} ]
    scores: { type : Array , "default" : [] }
});

module.exports = mongoose.model('Student', Student);