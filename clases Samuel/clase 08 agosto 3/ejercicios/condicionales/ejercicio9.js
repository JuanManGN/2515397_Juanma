/*Solicite una fecha al usuario. en formato día, mes y año. Dígale cuanto tiempo
ha pasado desde esa fecha hasta hoy o cuanto falta para llegar a esa fecha si es
posterior*/
var d =Math.round(Math.random()*31)
var m =Math.round(Math.random()*12)
var a =Math.round(Math.random()*9999)
console.log(d+' '+m+' '+a)
var d1 = (d-06)
var m1 = (m-08)
var d1 = (d-2022)
if (a>2022) {
    console.log('han pasado '+a1+' años con '+m1+' meses con '+d1+' dias para su fecha' )
}
else {
    if (m>08) {
        console.log('han pasado'+a1+' años con '+m1+' meses con '+d1+' dias para su fecha' )
    }
    else {
        if (d>06) {
            console.log('han pasado'+a1+' años con '+m1+' meses con '+d1+' dias para su fecha' )
        }
        else {
            d1 = d1*-1
            m1 = m1*-1
            a1 = a1 *-1
            if (d==06) {
                if (m==08) {
                    if (a==2022) {
                        console.log('usted esta en el dia de la creacion de este codigo')
                    }
                    else {
                        console.log('Faltan ',A1,' años con ',M1,' meses con ',D1,' dias para su fecha' )
                    }
                }
                else {
                    console.log('Faltan ',A1,' años con ',M1,' meses con ',D1,' dias para su fecha' )
                }
               }
            else {
                console.log('Faltan ',A1,' años con ',M1,' meses con ',D1,' dias para su fecha' )
            }
        } 
    }
}