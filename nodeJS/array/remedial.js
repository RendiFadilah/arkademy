//nomor 1
function hurufVokal(str){
    var vokal = 'aieuoAEIUO';
    var count = 0;

    for(var x = 0; x < str.length; x++){
        if(vokal.indexOf(str[x]) !== -1){
            count++;
        }
    }
    return count;
}

console.log(hurufVokal('RendiFadilah'));

//------------------------------------
//nomor 2

let angka = [4,2,3,1,7];
angka.sort();
console.log(angka);

//-----------------------
//nomor 3
var angka = [2,9,10,3,7,1,8,14,18,5,17];

var genap = [];
    var ganjil = [];
    var i = 0;
        
    for(i; i < angka.length; i++){
        if(angka[i] % 2 == 0){
            genap.push(angka[i]);
        }else{
            ganjil.push(angka[i]);
        }
    }

console.log(ganjil);
console.log(genap);