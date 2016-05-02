var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Student = require('./Student');

var Session = new Schema({
    key: String,
    email: String,
    students: [Student.schema]
});

Session.methods.createKey = function createKey (cb) {
    var possibleKeyLength = 7;
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    this.key = '';

    for (var i = 0; i < possibleKeyLength; i++) {
        this.key += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    if (cb) {
        return cb();
    }
};

Session.pre('remove', function(next) {
    Student.find({sessionKey: this.key}, function(err, docs) {
        for (var i = 0; i < docs.length; ++i) {
            docs[i].remove();
        }
        if (next) {
            next();
        }
    });
});

module.exports = mongoose.model('Session', Session);
