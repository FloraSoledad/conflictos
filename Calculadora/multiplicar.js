const multiplicar = function(a,b) {
    if (a===0  || b === 0){
        return 0
    }
    return a * b
}
console.log (multiplicar (5,10));
console.log (multiplicar (6,6));
console.log (multiplicar (8,9));

module.exports = multiplicar