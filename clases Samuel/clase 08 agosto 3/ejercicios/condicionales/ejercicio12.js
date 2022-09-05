/*Solicite la hora en formato horas, minutos y segundos. Imprima en pantalla la
hora que será dentro de 1 segundo*/
var hh =Math.round(Math.random()*12)
var mm =Math.round(Math.random()*60)
var ss =Math.round(Math.random()*60)
console.log(hh+":"+mm+":"+ss) 
ss = ss + 1
if (ss>=60) {
    ss = ss-60
    mm = mm+1
    if (mm>=60) {
        mm = mm-60
        hh = hh+1
        if (hh>=24) {
            hh = hh-12
        }
    }
}
console.log('Su hora un segundo despues es '+hh+':'+mm+':'+ss)