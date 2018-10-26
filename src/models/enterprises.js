const mongoose = require('mongoose');
const { Schema } = mongoose;

const enterprisesSchema = new Schema({
    name:String
});

module.exports = mongoose.model('Enterprises', enterprisesSchema);