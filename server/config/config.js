var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
module.exports = {
    development:{
        db: 'mongodb://localhost/train_db',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production:{
        db: 'mongodb://zarya:1105916@ds057000.mongolab.com:57000/telerik_lesson',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    }
};