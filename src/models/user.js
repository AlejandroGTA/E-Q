const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const { Schema } = mongoose;
//Colecciones de datos
const userSchema = new Schema({
    email: String,
    password: String,
    user:String,
    lastname:String,
    enterprise:String,
    admin:{
        type:Boolean,
        default:false
    }
});

userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
