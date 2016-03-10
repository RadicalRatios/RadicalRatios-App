var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Truck = new Schema({
    name: String,
    hours: String,
    location: {
    	latitude: Number,
    	longitude: Number,
    }
});

module.exports = mongoose.model('Truck', Truck);