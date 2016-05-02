var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    Game = require('./Game').schema;

var Student = new Schema({
    name: String,
    games: [Game],
    sessionId: String
});

Student.schema.pre('remove', function(next) {
    Game.remove({studentId: this._id}).exec();
    if (next) {
        next();
    }
});

module.exports = mongoose.model('Student', Student);