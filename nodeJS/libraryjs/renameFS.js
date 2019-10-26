//proses pemanggilan library fs
const fs = require('fs')

console.log('Start reading a file ...')

//proses readfile text.txt menggunakan library fs
fs.readFile('text.txt', 'utf-8', (err, content) =>{
    //untuk handle eror
    if(err){
        console.log('eror happened during reading the file')
        return console.log(err)
    }
    
    //
    fs.rename('text.txt', 'terserah.txt', (err)=>{
        if(err) console.log("Gagal Rename!" +err);

        console.log("Berhasil")
    })
})

console.log('end of the file')