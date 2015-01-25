var passport = require('passport'),
    localPassport = require('passport-local'),
    User = require('mongoose').model('User');

module.exports = function(){
    passport.use(new localPassport(function(username, password, done) {
            User.findOne({ username: username }, function (err, user) {
                if (err) {
                    console.log('Error loading user: ' + err);
                    return;
                }
                console.log(user);
                if (user && user.authenticate(password)) {
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