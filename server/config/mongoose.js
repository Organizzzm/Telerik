var mongoose = require('mongoose'),
    user = require('../models/user'),
    courses = require('../models/courses');

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

    courses.seedInitialCourses();
};