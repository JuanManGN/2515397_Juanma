/*Determinar si un número es o no es perfecto. Un numero es
perfecto si la suma de sus divisores sin incluir el propio
número es igual a este*/
var n = Math.round(Math.random()*100),
    c = 0,
    p = 0
console.log(n)
for (i = 1 ; i < n ; i++) {
    d = n % i
    if (d == 0) {
        c = c + i
    }
}
if (c==n) {
    console.log (n+' es un numero perfecto')
} else {
    console.log (n+' no es un numero perfecto')
}