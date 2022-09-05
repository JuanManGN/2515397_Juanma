/*Solicitar al usuario un número de hasta 9 dígitos e
imprimirlo en orden contrario. Ej. digito 6754 imprimo 4576*/
var n = 6754
for (i=1; i <=n; i++) {
    d = n % 10
    n = d / 10
    console.log(d)
}
