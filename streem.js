// create a local raw server

const http =require('http');
const fs=require('fs');
const { buffer } = require('stream/consumers');

const server=http.createServer((req,res)=>{
    if(req.url==='/read-txt' && req.method==="GET");
    const readStream=fs.createReadStream(process.cwd()+'/Text/read.txt');
    readStream.on('data',(buffer)=>{
        res.write(buffer)
    })
    readStream.on('end',()=>{
        res.end('heloo world')
    })
})

server.listen(5000,()=>{
    console.log('sefrver is sunning on port: 5000');
})