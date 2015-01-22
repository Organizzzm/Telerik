var    express    = require('express');

var env = process.env.NODE_ENV || 'development';

var app = express();

var config = require("./server/config/config")[env];
require('./server/config/express')(app, config);
require('./server/config/mongoode')(config);
require('./server/config/routes')(app);

/*var messageSchema = mongoose.Schema({
    message: String
});

var Message = mongoose.model('Message', messageSchema);

Message.remove({}, function(err){
    if(err){
        console.log("Message don't be cleared: " + err);
        return;
    }
    console.log("Message is be deleted");
});
Message.create({ message: 'Hi from mongoose!' }, function (err, model) {
    if (err){
        console.log("Message can not be created: " + err);
        return;
    }
    console.log(model.message);
    messageFromDB = model.message;
});*/

app.listen(config.port);
console.log('Listening on port ' + config.port + '...');