/*Solicite al usuario una cantidad numérica que expresa segundos (medida de
tiempo). Exprésela (conviértala) en horas minutos y segundos. Según el caso*/
var ss =Math.round(Math.random()*20)
var hh =0, mm = 0
console.log(ss)
if (ss>=3600) {
    hh = Math.trunc(ss/3600)
    ss = ss % 3600
}
if (ss>=60) {
    mm = Math.trunc(ss/60)
    ss = ss % 60
}
console.log('sus segundos ingresados equivalen a '+hh+' horas con '+mm+' minutos con '+ss+' segundos');