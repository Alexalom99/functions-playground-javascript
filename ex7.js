/**
 * Implementa una función que reciba dos números y devuelva el mayor de ellos.
 */

function maxNumber(a, b) {
    // COMPLETAR
    let result;
    if (a > b) {
        result = a;
    }
    else {
        result = b;
    }
    return result;
}

console.log(maxNumber(10, 20)); // 20
console.log(maxNumber(5, 2)); // 5
console.log(maxNumber(7, 7)); // 7