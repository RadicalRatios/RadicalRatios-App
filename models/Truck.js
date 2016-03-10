var Truck = new Schema({
    name: String,
    hours: String,
    location: {
    	latitude: Number,
    	longitude: Number,
    }
});