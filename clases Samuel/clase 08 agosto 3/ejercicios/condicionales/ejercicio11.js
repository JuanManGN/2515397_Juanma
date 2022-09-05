/*Escribir un algoritmo que pida un valor entero que equivale a una cantidad de
DINERO y calcule a cuantos billetes de 50.000, 20.000, 10.000, 5.000, 2.000, y
1.000 equivalen. Si el usuario digita 282000 el programa debe responder cinco
billetes de 50.000, un billete de veinte mil, un billete de diez mil, un billete de
dos mil.*/
var d =Math.round(Math.random()*99999)
var d50=0, d20=0, d10=0, d5=0, d2=0, d1=0
console.log(d)
if (d>=50000) {
    d50 = Math.trunc(d/50000)
    d = d % 50000
}
if (d>=20000) {
    d20 = Math.trunc(d/20000)
    d = d % 20000
}
if (d>=10000) {
    d10 = Math.trunc(d/10000)
    d = d % 10000
}
if (d>=5000) {
    d5 = Math.trunc(d/5000)
    d = d % 5000
}
if (d>=2000) {
    d2 = Math.trunc(d/2000)
    d = d % 2000
}
if (d>=1000) {
    d1 = Math.trunc(d/1000)
    d = d % 1000
}
console.log('Su cantidad de dinero equivale a '+d50+' billetes de $50.000, '+d20+' billetes de $20.000, '+d10+' billetes de $10.000, '+d5+' billetes de $5.000, '+d2+' billetes de $2.000, '+d1+' billetes de $1.000.')