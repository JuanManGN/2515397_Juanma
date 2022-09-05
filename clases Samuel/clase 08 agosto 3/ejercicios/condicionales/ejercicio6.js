/*Pida un numero al usuario que representa días del año. Diga a que mes del año
corresponde así. Si el número es menor o igual a 31 indica que esta en enero,
Pero si el número por ejemplo es 32 indica que es el 1 de febrero. No tenga en
cuenta si el año es bisiesto, es decir siempre febrero tiene 28 días.
*/
var d = Math.round(Math.random()*366)
console.log(d)
if (d<=31) {
    console.log('es enero')
}
else {
    if (d<=59) {
        console.log('es febrero')
    }
    else {
        if (d<=90) {
            console.log('es marzo')
        }
        else {
            if (d<=121) {
                console.log('es abril')
            }
            else {
                if (d<=152) {
                    console.log('es mayo')
                }
                else {
                    if (d<=183) {
                        console.log('es junio')
                    }
                    else {
                        if (d<=214) {
                            console.log('es julio')
                        }
                        else {
                            if (d<=245) {
                                console.log('es agosto')
                            }
                            else {
                                if (d<=276) {
                                    console.log('es septiembre')
                                }
                                else {
                                    if (d<=307) {
                                        console.log('es octubre')
                                    }
                                    else {
                                        if (d<=338) {
                                            console.log('es noviembre')
                                        }
                                        else {
                                            if (d<=366) {
                                                console.log('es diciembre')
                                            } 
                                            else {
                                                console.log('se paso de los dias del año')
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}