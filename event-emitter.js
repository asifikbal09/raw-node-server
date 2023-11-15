const events = require('events');

const myEmitter = new events.EventEmitter();

myEmitter.on('birthday', () => {
    
    console.log('Happy Birthday to You.');
});
myEmitter.on('birthday', (gift) => {

    console.log(`I will send you a ${gift}`);
});


myEmitter.emit('birthday',"bike");