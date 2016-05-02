var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    Game = require('./Game');

var Student = new Schema({
    name: String,
    games: [Game.schema],
    sessionKey: String
});

Student.pre('remove', function(next) {
    Game.find({studentId: this._id}, function(err, docs) {
        for (var i = 0; i < docs.length; ++i) {
            docs[i].remove();
        }
        if (next) {
            next();
        }
    });
});

module.exports = mongoose.model('Student', Student);