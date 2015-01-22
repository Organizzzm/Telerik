var mongoose = require('mongoose'),
    passport = require('passport'),
    localPassport = require('passport-local');

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
        lastName: String
        //salt: String,
        //hashPass: String
    });

    var User = mongoose.model('User', userSchema);

    User.find({}).exec(function(err, collection){
        if(err){
            console.log("Cannot find user: " + err);
            return;
        }
        if(collection == 0){
            User.create({username: "zarya", firstName: "Dmitry", lastName: "Zakharov"});
            User.create({username: "Vasek", firstName: "Vasily", lastName: "Vasiliev"});
        }
    });

    passport.use(new localPassport(function(username, password, done) {
            User.findOne({ username: username }, function (err, user) {
                if (err) {
                    console.log('Error loading user: ' + err);
                    return;
                }
                if (user) {
                    return done(null, user);
                }else{
                    return done(null, false);
                }

            });
        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function (err, user) {
            if (err) {
                console.log('Error loading user: ' + err);
                return;
            }
            if (user) {
                return done(null, user);
            }else{
                return done(null, false);
            }
        });
    });
}