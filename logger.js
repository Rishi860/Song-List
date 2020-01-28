// What I am doing is creating a program in which i can emit a event in a module and listen to it in other module.
const EventEmitter = require('events'); // This is a class variable name capital letters.
const emitter = new EventEmitter();
// var url = 'http://something/io/';

class Logger extends EventEmitter {
    // in class i dont need to define a function, there function exist as a method which dont have to use a 'Funtion' keyword.
    call(message){
    console.log(message);
    
    // Raise an event
   emitter.emit('messageLogged',{id:1, url:'http://'});
    }
}


module.exports = Logger; 