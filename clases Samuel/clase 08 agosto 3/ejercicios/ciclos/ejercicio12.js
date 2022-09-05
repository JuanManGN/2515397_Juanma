/*Escribir un programa que visualice la siguiente figura,
utilizando ciclos. El usuario decide cuantas líneas quiere
imprimir
* */
var x = Math.round(Math.random()*10+5)
console.log(x)
for (i=1; i<=x; i++) {
    var p =""
    for (j=0;j<i;j++){
        p=p+"*"
    }
    console.log(p)
}