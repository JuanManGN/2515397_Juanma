/*Un obrero necesita calcular su salario semanal, el cual se obtiene de la sig.
manera:
Si trabaja 40 horas o menos se le paga $2600 por hora
Si trabaja más de 40 horas se le paga $2600 por cada una de las primeras 40
horas y $5000 por cada hora extra
*/
var h = Math.round(Math.random()*60)
console.log(h)
if (h<=40) {
    h = h *2600
}
else {
    var e = h - 40
    h = h - e
    h = (h*2600)+(e*5000)
}
console.log('su salario semanal es de '+h)