/*Determinar cuales son los múltiplos de 5 comprendidos entre
1 y N*/
var n = Math.round(Math.random()*100)
console.log(n)
for (i = 1; i < n; i++) {
    m = 5 * i
    console.log('los multiplos de 5 son: '+m)
}