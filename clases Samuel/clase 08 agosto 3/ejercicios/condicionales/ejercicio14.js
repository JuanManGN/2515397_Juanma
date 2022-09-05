/*Solicite un Angulo al usuario en grados. Diga en que cuadrante está. Diga
además en que vuelta está sabiendo que cada 360 grados se completa una
vuelta a la circunferencia. Además diga el resultado en radianes*/
var n =  Math.round(Math.random()*99999)
console.log(n)
var v = 360
var g = Math.trunc(n/v)
var a = n-(v*g)
if (a>0 == a<90){
    var cuadrante = 'Esta en el cuadrante 1'
}
else {
    if (a>90 == a<180){
        var cuadrante = 'Esta en el cuadrante 2'
    }
    else {
        if (a>180 == a<270){
        var cuadrante = 'Esta en el cuadrante 3'
        }
        else {
            if (a>180 == a<360){
                var cuadrante = 'Esta en el cuadrante 4'
            }
        }
    }
}
var pi = 3.1416
var r = Math.round((n*pi)/180)
var rad = (n*pi)/180
if (g>1) {
    var an = 'vueltas'
} else {
    var an = 'vuelta'
}
console.log(" El Angulo:  "+n+"°   ",cuadrante,"   y a dado  "+g+" "+an+".  \n"+ "El angulo  "+n+"°   Equivale a   "+rad+" rad  que es aproximadamente "+r+ "  rad"  )