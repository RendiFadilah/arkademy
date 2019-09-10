//Pemanggilan Library Axios
const axios = require('axios');

//URL API
const url = 'https://rickandmortyapi.com/api/character';

//Action GET METHOD
axios.get(url).then(res =>{
    //Jika succes akan tertampil disini
    console.log(res.data);
}).catch(err => {
    //Jika eror akan tertampil disini
    console.log(err);
})