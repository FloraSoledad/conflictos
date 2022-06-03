const dividir = function(a,b) {
    if (a===0  || b === 0){
        return 0
    }
    return a / b
}
console.log (dividir (5,10));
console.log (dividir (6,6));
console.log (dividir (8,0));

module.exports = dividir 