/*Algoritmo para hallar el m.c.d de dos números m y n por
el algoritmo de Euclides*/
var m = Math.round(Math.random()*100),
    n = Math.round(Math.random()*100)
console.log(m+' '+n)
var r1= Math.trunc(m/n),
    r2= n * r1,
    r3= m - r2,
    r4= n % r3
if (r4==0) {
    console.log('el m.c.d es '+r3)
} 
