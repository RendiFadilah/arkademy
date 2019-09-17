const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr4 = {};
const nama1 = {name: 'Rendi Fadilah', kelas: 'XI RPL'};
const nama3 = {name: 'Rendi Fadilah', kelas: 'XI RPL'};
const nama2 = {umur: 16, hobi: 'Coding'}

const hasil = {...nama1, ...nama3};
arr4.push(nama2);

console.log(arr1.concat(arr2));
console.log(hasil);