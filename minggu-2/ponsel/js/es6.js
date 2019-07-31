const ponsel = [
    {
        "nama":"Xiaomi Redmi 5A",
        "harga":"1.400.000",
        "ram":"2GB",
        "storage": "16GB"     
    },
    {
        "nama":"Vivo V5s",
        "harga":"4.000.000",
        "ram":"4GB",
        "storage": "64GB"
    },
    {
        "nama":"Galaxy M20",
        "harga": "2.800.000",
        "ram": "4GB",
        "storage" : "64GB",
    },
    {
        "nama":"Galaxy M10",
        "harga": "1.700.000",
        "ram": "3GB",
        "storage" : "32GB",
    },
    {
        "nama":"Galaxy M30",
        "harga": "3.100.000",
        "ram": "6GB",
        "storage" : "128GB",
    },
    {
        "nama":"Oppo A7N",
        "harga": "3.100.000",
        "ram": "4GB",
        "storage" : "64GB",
    },
    {
        "nama":"Oppo A9",
        "harga": "3.900.000",
        "ram": "6GB",
        "storage" : "128GB",
    },
    {
        "nama":"Oppo A7",
        "harga": "2.900.000",
        "ram": "4GB",
        "storage" : "64GB",
    },
    {
        "nama":"Vivo V9",
        "harga": "3.900.000",
        "ram": "4GB",
        "storage" : "64GB",
    },
    {
        "nama":"Vivo V7+",
        "harga": "4.600.000",
        "ram": "4GB",
        "storage": "64GB",
    }
    
    


];

 let x;

 for(x in ponsel){
     let namaPonsel = ponsel[x].nama
     let hargaPonsel = ponsel[x].harga
     let ramPonsel = ponsel[x].ram
     let storagePonsel = ponsel[x].storage
    let divider ="<div><span class='nama-ponsel'>"+namaPonsel+"</span><span class='harga-ponsel'>"+hargaPonsel+"</span><span class='ram-ponsel'>"+ramPonsel+"</span><span class='storage-ponsel'>"+storagePonsel+"</span></div>";
    document.getElementById('hp').innerHTML += divider
 }

 