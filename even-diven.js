
const EventEmitter=require('events');

const myEmit=new EventEmitter;

// first listener

myEmit.on('birthday',()=>{
    console.log(`happy bdy to u`);
})

// second listener
myEmit.on('birthday',(param)=>{
    console.log(`i will send u a gift  ${param} `);
})

myEmit.emit('birthday','bike')