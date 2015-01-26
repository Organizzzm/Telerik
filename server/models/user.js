var mongoose = require('mongoose'),
    encrypt = require('../utilites/encryption');

var userSchema = mongoose.Schema({
    username: {type: String, require: '{PATH} is required', unique: true},
    firstName: {type: String, require: '{PATH} is required'},
    lastName: {type: String, require: '{PATH} is required'},
    salt: String,
    hashPass: String,
    roles: [String]
});

userSchema.method({
    authenticate: function(password){
        if(encrypt.generateHashPassword(this.salt, password)== this.hashPass){
            return true;
        }else{
            return false;
        }
    }
});

var User = mongoose.model('User', userSchema);