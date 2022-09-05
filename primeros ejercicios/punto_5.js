//punto 5
/*Implemente suma, resta, multiplicación y división de fraccionarios. Tenga en cuenta que un número fraccionario tiene numerador/denominador. 
Es decir cada fraccionario se conforma de dos variables numéricas*/

var a1 = Math.round(Math.random() * 50);
var a2 = Math.round(Math.random() * 50);
var b1 = Math.round(Math.random() * 50);
var b2 = Math.round(Math.random() * 50);

if (b1 == b2) {
    var suma = (a1 + a2) / b1
    var resta = (a1 - a2) / b1
    var multiplicacion = (a1 * a2) / (b1 * b2)
    var division = (a1 * b2) / (a2 * b1)
} else {
    var suma = ((a1 * b2) + (a2 * b1)) / (b1 * b2)
    var resta = ((a1 * b2) - (a2 * b1)) / (b1 * b2)
    var multiplicacion = (a1 * a2) / (b1 * b2)
    var division = (a1 * b2) / (a2 * b1)
}
console.log("las fraciones son: " + a1 + "/" + b1 + ", " + a2 + "/" + b2)
console.log("los resultados son: \n" + "suma: " + suma + "\n" + "resta: " + resta + "\n" + "multiplicacion: " + multiplicacion + "\n" + "division: " + division)