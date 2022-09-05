/*Solicite al usuario la hora en formato hh:mm:ss (hora militar, 24 horas). El
programa debe responder que hora será un segundo después. Ej: ingreso
11:59:59, el programa responde 12:00:00*/
var hh =Math.round(Math.random()*24)
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
            hh = hh-24
        }
    }
}
console.log('Su hora un segundo despues es '+hh+':'+mm+':'+ss)
