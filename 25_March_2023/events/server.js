const events = require('events');
const eventEmitter = new events.EventEmitter();


var testingEventHandler = () => {
    console.log("Testing Event");
}
eventEmitter.on('testingEvent', testingEventHandler);

eventEmitter.emit('testingEvent');
eventEmitter.emit('testingEvent');
eventEmitter.emit('testingEvent');
