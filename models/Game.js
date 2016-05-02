var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Student = require('./Student').schema;

var Game = new Schema({
    name: String,
    score: Number
});

module.exports = mongoose.model('Game', Game);
