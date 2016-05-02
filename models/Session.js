var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Student = require('./Student').schema;

var Session = new Schema({
    key: String,
    email: String,
    students: [Student]
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
    Student.remove({sessionKey: this.key}).exec();
    if (next) {
        next();
    }
});

module.exports = mongoose.model('Session', Session);
