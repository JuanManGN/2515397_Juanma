/*Pedir 3 numeros e indicar cual de ellos es el valor del medio. Ej 11, 2 1000, el
valor del medio es 11. No use operadores lógicos*/
var n1 =Math.round(Math.random()*20)
var n3 =Math.round(Math.random()*20)
var n2 =Math.round(Math.random()*20)
console.log(n1+" "+n2+" "+n3)
if (n1>n2) {
    if (n1>n3) {
        if (n2>n3) {
            console.log("'el del medio es "+n2)
        } else {
            console.log("'el del medio es "+n3)
        } 
    }
    else {
        console.log("'el del medio es "+n1)
    }
}
else {
    if (n2>n3) {
        if (n1>n3) {
            console.log('el del medio es '+n1)
        }
        else {
            console.log('el del medio es '+n3)
        }
    }
    else {
        console.log('el del medio es '+ n2)
    }
}
