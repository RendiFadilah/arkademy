const fs = require('fs')

console.log('Start reading a file ...')

fs.readFile('text.txt', 'utf-8', (err, content) =>{
    if(err){
        console.log('eror happened during reading the file')
        return console.log(err)
    }

    console.log("yeay berhasil! Datanya bro: " +content);
})

console.log('end of the file')