//Determinar los divisores de un número introducido por teclado 
var n = Math.round(Math.random()*100)
console.log(n)
for (i = 1 ; i <= n ; i++) {
    d = n % i
    if (d == 0) {
        console.log(i+' es divisor de '+n)
    }
}