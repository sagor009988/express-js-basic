

const fs=require('fs');

//readfile
const read=fs.readFileSync('./Text/read.txt','utf-8');

// write file
const writeFile=fs.readFileSync('/Text/write.txt' ,read );
console.log(writeFile);
