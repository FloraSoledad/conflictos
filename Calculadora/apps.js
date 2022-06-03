const process = require('process');
const calculeitor = require ('./calculeitor');

let operacion = process.argv [2];
let numeroA = +process.argv [3];
let numeroB = +process.argv [4];
let resultado = 0;

if ( operacion === "sumar") {
    resultado = calculeitor.sumar (numeroA, numeroB);
}
else if ( operacion === "restar") {
    resultado = calculeitor.restar (numeroA, numeroB); 
}
else if ( operacion === "dividir") {
    resultado = calculeitor.dividir (numeroA, numeroB);
}
else if ( operacion === "multiplicar") {
    resultado = calculeitor.multiplicar (numeroA, numeroB);
}
else if ( operacion === "potencia") {
    resultado = calculeitor.potencia (numeroA, numeroB);
}            
console.log (resultado); 