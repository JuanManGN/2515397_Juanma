/*Telefónica realiza los cálculos del costo de una llamada de teléfono siguiendo
los cálculos así:
Cuando se descuelga el teléfono los primeros 3 minutos (banderazo) cuestan
200 pesos y cada minuto adicional cuesta 50 pesos. Escriba un programa que
permita calcular el costo de una llamada dados los minutos de duración.*/
var m = Math.round(Math.random()*10)
console.log(m)
if (m<=3) {
    m = m *200
}
else {
    var e = m - 3
    m = m - e
    m = (m*200)+(e*50)
}
console.log('Su llamada cuesta '+m)