// asynic use

const fs =require('fs');

fs.readFile('./Text/read.txt','utf-8',(err,data)=>{
    if(err){
        throw Error ('Read error')
    }
    console.log(data);

    fs.writeFile('./Text/read-3',data,(err)=>{
        if(err){
            console.log(err);
        }
        console.log("lolll");
    })
})