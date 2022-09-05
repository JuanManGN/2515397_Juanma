/*Pedir un número entre 0 y 9.999 y decir cuantas cifras tiene. Cuando el número 
 exceda los límites emita un mensaje y finalice el programa*/
var n = Math.round(Math.random()*9999)
console.log(n)
if (n<10) {
    console.log('su numero tiene 1 cifra')
}
else {
    if (n<100) {
        console.log('su numero tiene 2 cifras')
    }
    else {
        if (n<1000) {
            console.log('su numero tiene 3 cifras')
        }
        else {
            if (n<10000) {
                console.log('su numero tiene 4 cifras')
            }
            else {
                console.log('su numero sobre pasa los limites')
            }
        }
    }
}