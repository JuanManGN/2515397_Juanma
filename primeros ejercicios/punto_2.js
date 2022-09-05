//segundo punto
//Genere una medida de temperatura en grados celcius de forma aleatoria y conviertala a Fahrenheit, Kelvin y Rankine.

var C = Math.round(Math.random() * 100)
console.log("Grados Celsius " + C);

var F = Math.round(C * 1.8 + 32)
console.log("Grados Fahrenheit " + F);

var K = Math.round(C + 273.15)
console.log("Grados Kelvin " + K);

var R = Math.round((C + 273.15) * 9 / 5)
console.log("Grados Rankine " + R);