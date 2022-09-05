/* Calcular la operación x^n sin utilizar la función pow */
var n = 3
    x = 3
    r = 1
console.log(x+' '+n)
for (i = 1; i <= n; i++) {
    r = r * x
    console.log(r)
}
console.log(Math.trunc(x))
console.log(Math.pow(x,n))