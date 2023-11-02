//LECTURA DE DATOS

const fs = require('fs');

let data = fs.readFileSync('./data/dataEmpresa.json')
//console.log(data);

let dataEmpresa=JSON.parse(data);
console.log(dataEmpresa);
console.log(typeof (dataEmpresa));