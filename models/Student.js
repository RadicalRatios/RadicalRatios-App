var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    Game = require('./Game').schema;

var Student = new Schema({
    name: String,
    games: [Game]
});

module.exports = mongoose.model('Student', Student);