/*crecimiento exponencial 
- poblacion
n = t
n = inicia 10
r = nacimientos-muertes/n
agregamos 5 nacimientos
quitamos 2 muertres
r = .3
ahora 10 * .3
dn / dt = r(n)

algebra 
n(t)=n(1+r)^t
*/

//tiene 10.000 habitantes numero aletatorio entre 1.000 y 10.000 calcule en 20 años
//nacimientos maximo aleatorio 10% muertes maximo aleotrio 3%
function valornt (rv) {
    let num = Math.trunc((Math.random()*10000-1000)+1000)
        nacer = 0
        muerte = 0
        r = 0
        nt = 0
    for (let i = 0; i < rv; i++) {
        nacer = (num * (Math.trunc(Math.random()*10-1)+1)) / 100
        muerte = Math.round((Math.random()*3-1)+1)
        muerte = (num * muerte) / 100
        r = (nacer - muerte) / num
        nt = num*(1+r)**i
        console.log(`total poblacion ${Math.trunc(nt)}`)
        console.log(`crecimiento ${r}`)
    }
}

valornt(5)

/*promesas
    1. al 10% de la poblacion final casas cuantas casas son, 5 segundos
    2. el crecimiento neto en 10 segundos periodos ((pf/pi)-1)*100, 5 segundos*/
function valornt (rv) {
        num = Math.trunc((Math.random()*10000-1000)+1000)
        nacer = 0
        muerte = 0
        r = 0
        nt = 0
    for (let i = 0; i < rv; i++) {
        nacer = (num * (Math.trunc(Math.random()*10-1)+1)) / 100
        muerte = Math.round((Math.random()*3-1)+1)
        muerte = (num * muerte) / 100
        r = (nacer - muerte) / num
        nt = num*(1+r)**i
        console.log(`total poblacion ${Math.trunc(nt)}`)
        console.log(`crecimiento ${r}`)
    }
    
}
function casitas (cb1,rv) {
    cb1(rv)
    let casas = (nt * 10)/100
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`la cantidad de casas ha regalar son ${Math.trunc(casas)}`)
        }, 5000);
    })

}
function crecimientoneto (cb1,rv) {
    cb1(rv)
    let cn = (nt * (nt - num))*100
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`el crecimiento neto en ${rv} años es ${cn}`)
        }, 5000);
    })
}
async function imprimir (cb1,rv) {
    let crecimienton = await crecimientoneto(cb1,rv)
    let casita = await casitas(cb1,rv)
    console.log(`${crecimienton}\n${casita}`) 
}
imprimir (valornt,2)