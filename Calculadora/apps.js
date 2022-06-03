const process = require('process');
const calculeitor = require ('./calculeitor');

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
