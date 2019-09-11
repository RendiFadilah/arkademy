//Unlink FS = hapus data /file

//panggil library fs
const fs = require('fs');

//Baca file terserah.txt apakah ada filenya ?
//menggunakan fs.readFile

fs.readFile('terserah.txt', async(err, data) => {
    //Jika data tidak ditemukan
    if(err) return console.log('Data tidak ditemukan!');
    //jalankan consolge.log dulu menggunakan await
    await console.log("Data ditemukan!");

    //data ditemukan kita langsung eksekusi delete
    fs.unlink('terserah.txt', (err) =>{ 

        //jika gagal delete
        if(err) return console.log("Gagal hapus data!");

        //jika berhasil dete
        console.log("Hapus Data Berhasil!")
    })
})