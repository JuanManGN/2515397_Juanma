// Úselo if para especificar un bloque de código que se ejecutará, si una condición especificada es verdadera
var x=Math.round(Math.random()*100)
if (x<50) {
    console.log("su numero "+x+" es menor a 50")
}
//Se usa else para especificar un bloque de código a ejecutar, si la misma condición es falsa
var x=Math.round(Math.random()*100)
if (x<50) {
    console.log("su numero "+x+" es menor a 50")
} else {
    console.log("su numero "+x+" es mayor a 50")
}
//Úselo else if para especificar una nueva condición para probar, si la primera condición es falsa
var x=Math.round(Math.random()*100)
if (x<50) {
    console.log("el numero "+x+" es menor a 50")
} else if (x=50){
    console.log("su numero es igual a 50")

} else {
    console.log("su numero "+x+" es mayor a 50")
}
//Úselo switchpara especificar muchos bloques alternativos de código para ejecutar
var x=Math.round(Math.random()*100)
if (x<50) {
    console.log("el numero "+x+" es menor a 50")
} else if (x=50){
    console.log("su numero es igual a 50")

} else {
    console.log("su numero "+x+" es mayor a 50")
}