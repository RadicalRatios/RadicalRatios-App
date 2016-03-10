var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Contact = new Schema({
    email: String
});

module.exports = mongoose.model('Contact', Contact);
