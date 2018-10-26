const mongoose = require('mongoose');
const { Schema } = mongoose;

const devicesSchema = new Schema({
    enterprise:String,
    coords:String,
    sensors:String
});

module.exports = mongoose.model('Devices', devicesSchema);