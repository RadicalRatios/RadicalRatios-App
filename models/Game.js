var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Game = new Schema({
    name: String,
    score: Number,
    studentId: String
});

module.exports = mongoose.model('Game', Game);
