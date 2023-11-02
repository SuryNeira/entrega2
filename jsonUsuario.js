//LECTURA DE DATOS

const fs = require('fs');

let data = fs.readFileSync('./data/dataUsuario.json')
//console.log(data);

let dataUsuario=JSON.parse(data);
console.log(dataUsuario);
console.log(typeof (dataUsuario));