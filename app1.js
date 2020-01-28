
// const EventEmitter = require('events'); // This is a class variable name capital letters.

const Logger = require('./logger');
const logger = new Logger();

// Raise a listener
logger.on('messageLogged',function(arg){
    console.log('Got that message',arg);
})

logger.call('Here I called my function present in the logger module'); 