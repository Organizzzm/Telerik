var mongoose = require('mongoose'),
    crypto = require('crypto');

module.exports = function(config){
    mongoose.connect(config.db);

    var db = mongoose.connection;
    db.on('open', function(err){
        if(err){
            console.log(err);
            return;
        }
        console.log('Database is connect...');
    });

    db.on('error', function(err){
        console.log(err);
    });

    var userSchema = mongoose.Schema({
        username: String,
        firstName: String,
        lastName: String,
        salt: String,
        hashPass: String,
        roles: [String]
    });

    userSchema.method({
        authenticate: function(password){
            if(generateHashPassword(this.salt, password)== this.hashPass){
                return true;
            }else{
                return false;
            }
        }
    });

    var User = mongoose.model('User', userSchema);

    User.find({}).exec(function(err, collection){
        if(err){
            console.log("Cannot find user: " + err);
            return;
        }

        //User.remove({}, function(){
            if(collection.length === 0){
                var salt,
                    pwd;

                salt = generateSalt();
                hashedPwd = generateHashPassword(salt, 'zakharov');
                User.create({username: "zarya", firstName: "Dmitry", lastName: "Zakharov", salt: salt, hashPass: hashedPwd, roles: ['admin']});
                salt = generateSalt();
                hashedPwd = generateHashPassword(salt, 'Vasiliev');
                User.create({username: "vasek", firstName: "Vasily", lastName: "Vasiliev", salt: salt, hashPass: hashedPwd, roles: ['user']});
                console.log("Users add to database...");
            }
        //});
    });



};

function generateSalt(){
    return crypto.randomBytes(128).toString('base64');
};

function generateHashPassword(salt, pwd){
    var hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pwd).digest('hex');
};