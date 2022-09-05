//mision:
//cinco de cada programas de ciclos y condicionales tener dos funciones clasica y flecha
//CICLOS
// 1 Determinar los divisores de un número introducido por teclado 
const divisores = (n) => {
    let num = []
    for (i = 1; i <= n; i++) {
        d = n % i
        if (d == 0) {
            num.push(i)
        }
    }
    return `${num} son divisores de ${n}`
}
console.log(divisores(26))

function divisores1(n) {
    let num = []
    for (i = 1; i <= n; i++) {
        d = n % i
        if (d == 0) {
            num.push(i)
        }
    }
    return `${num} son divisores de ${n}`
}
console.log(divisores1(26))

//2 Determinar si un numero es o no es primo
const primos = n => {
    c = 0
    for (x = 1; x <= n; x++) {
        var d = n % x
        if (d == 0) {
            c = c + 1
        }
    }
    if (c == 2) {
        return `${n} es primo`
    } else {
        return `${n} no es primo`
    }
}
console.log(primos(32))

function primos1(n) {
    c = 0
    for (x = 1; x <= n; x++) {
        var d = n % x
        if (d == 0) {
            c = c + 1
        }
    }
    if (c == 2) {
        return `${n} es primo`
    } else {
        return `${n} no es primo`
    }
}
console.log(primos1(2))

/*Cuáles y cuántos son los números primos comprendidos 
entre 1 y 1000*/
function primos10() {
    var v=[]
    for(let i=0; i<1000; i++){
        v[i]= i + 1}
        c = 0 
        for (var i = 0; i < v.length; i++) {
            for (let j = i + 1; j < v.length; j++) {
                var d = i % j
                if (d == 0) {
                    c = c + 1
                }
                }
                if (c == 2) {
                    return `${i} es primo`
                } else {
                    return `${i} no es primo`
                }
            }
}
console.log(primos10())



/*3 Determinar si un número es o no es perfecto. Un numero es
perfecto si la suma de sus divisores sin incluir el propio
número es igual a este*/

const perfecto = n => {
    c = 0
    p = 0
    for (i = 1; i < n; i++) {
        d = n % i
        if (d == 0) {
            c = c + i
        }
    }
    if (c == n) {
        return `${n} es un numero perfecto`
    } else {
        return `${n} no es un numero perfecto`
    }
}
console.log(perfecto(6))

function perfecto1(n) {
    c = 0
    for (i = 1; i < n; i++) {
        d = n % i
        if (d == 0) {
            c = c + i
        }
    }
    if (c == n) {
        return `${n} es un numero perfecto`
    } else {
        return `${n} no es un numero perfecto`
    }
}
console.log(perfecto1(6))

/*9 Calcular la operación x^n sin utilizar la función pow */
const sinpow1 = (x,n) => {
    r = 1
    for (i = 1; i <= n; i++) {
        r = r * x
    }
    return `el resultado es ${Math.trunc(r)}`
}
console.log(sinpow1(3,3))

function sinpow(x,n) {
    r = 1
    for (i = 1; i <= n; i++) {
        r = r * x
    }
    return `el resultado es ${Math.trunc(r)}`
}
console.log(sinpow(3,3))

//CONDICIONALES
/*1 Pedir 3 numeros e indicar cual de ellos es el valor del medio. Ej 11, 2 1000, el
valor del medio es 11. No use operadores lógicos*/
const valormedio = (n1,n2,n3) => {
if (n1>n2) {
    if (n1>n3) {
        if (n2>n3) {
            return `el del medio es ${n2}`
        } else {
            return `el del medio es ${n3}`
        } 
    }
    else {
        return `el del medio es ${n1}`
    }
}
else {
    if (n2>n3) {
        if (n1>n3) {
            return `el del medio es ${n1}`
        }
        else {
            return `el del medio es ${n3}`
        }
    }
    else {
        return `el del medio es ${n2}`
    }
}
}
console.log(valormedio(11,2,1000))

function valormedio1 (n1,n2,n3)  {
    if (n1>n2) {
        if (n1>n3) {
            if (n2>n3) {
                return `el del medio es ${n2}`
            } else {
                return `el del medio es ${n3}`
            } 
        }
        else {
            return `el del medio es ${n1}`
        }
    }
    else {
        if (n2>n3) {
            if (n1>n3) {
                return `el del medio es ${n1}`
            }
            else {
                return `el del medio es ${n3}`
            }
        }
        else {
            return `el del medio es ${n2}`
        }
    }
}
console.log(valormedio1(11,2,1000))

/*2 Escribe un programa que pida tres números y que escriba si son los tres
iguales, si hay dos iguales o si son los tres distintos*/ 
const comparar = (n1,n2,n3) => {
    if (n1==n2) {
        if (n1==n3) {
           return ('los tres numeros son iguales')
        }
        else {
            return ('solo hay dos numeros iguales ya que '+n3+' no es igual a '+n1+', '+n2)
        }
    }
    else {
        if (n2==n3) {
            return ('solo hay dos numeros iguales ya que '+n1+' no es igual a '+n3+', '+n2)
        }
        else {
        if (n3==n1) {
            return ('solo hay dos numeros iguales ya que '+n2+' no es igual a '+n1+', '+n3)
        }
        else {
            return `los tres numeros son distintos`
        }
        }
    }
}
console.log(comparar(11,2,2))

function comparar1 (n1,n2,n3) {
    if (n1==n2) {
        if (n1==n3) {
           return ('los tres numeros son iguales')
        }
        else {
            return ('solo hay dos numeros iguales ya que '+n3+' no es igual a '+n1+', '+n2)
        }
    }
    else {
        if (n2==n3) {
            return ('solo hay dos numeros iguales ya que '+n1+' no es igual a '+n3+', '+n2)
        }
        else {
        if (n3==n1) {
            return ('solo hay dos numeros iguales ya que '+n2+' no es igual a '+n1+', '+n3)
        }
        else {
            return `los tres numeros son distintos`
        }
        }
    }
}
console.log(comparar1(11,2,2))

/*3 Pedir un número entre 0 y 9.999 y decir cuantas cifras tiene. Cuando el número 
 exceda los límites emita un mensaje y finalice el programa*/
const cifras = n => {
if (n<10) {
    return ('su numero tiene 1 cifra')
}
else {
    if (n<100) {
        return('su numero tiene 2 cifras')
    }
    else {
        if (n<1000) {
            return ('su numero tiene 3 cifras')
        }
        else {
            if (n<10000) {
                return ('su numero tiene 4 cifras')
            }
            else {
                return ('su numero sobre pasa los limites')
            }
        }
    }
}
}
console.log(cifras(250))

function cifras1 (n) {
    if (n<10) {
        return ('su numero tiene 1 cifra')
    }
    else {
        if (n<100) {
            return('su numero tiene 2 cifras')
        }
        else {
            if (n<1000) {
                return ('su numero tiene 3 cifras')
            }
            else {
                if (n<10000) {
                    return ('su numero tiene 4 cifras')
                }
                else {
                    return ('su numero sobre pasa los limites')
                }
            }
        }
    }
}
console.log(cifras1(250))

/*4 Pedir una nota de 0 a 10 y mostrarla de la forma: Insuficiente, Suficiente, Bien,
etc. Use la escala que prefiera, pero cerciórese que tiene 5 valores
*/ 
const nota = n => {
if (n>=9) {
    return ('sobresaliente')
}
else {
    if(n>=7) {
        return ('bueno')
    }
    else {
        if (n>=5) {
            return ('suficiente')
        }
        else {
            if (n>=3) {
                return ('deficiente')
            }
            else {
                return ('muy deficiente')
            }
        }
    }
}
}
console.log(nota(6))

function nota1 (n) {
    if (n>=9) {
        return ('sobresaliente')
    }
    else {
        if(n>=7) {
            return ('bueno')
        }
        else {
            if (n>=5) {
                return ('suficiente')
            }
            else {
                if (n>=3) {
                    return ('deficiente')
                }
                else {
                    return ('muy deficiente')
                }
            }
        }
    }
}
console.log(nota1(6))

/*5 Pida un numero al usuario que representa días del año. Diga a que mes del año
corresponde así. Si el número es menor o igual a 31 indica que esta en enero,
Pero si el número por ejemplo es 32 indica que es el 1 de febrero. No tenga en
cuenta si el año es bisiesto, es decir siempre febrero tiene 28 días.
*/
const dia = d => {
    if (d<=31) {
        return ('es enero')
    }
    else {
        if (d<=59) {
            return ('es febrero')
        }
        else {
            if (d<=90) {
                return ('es marzo')
            }
            else {
                if (d<=121) {
                    return ('es abril')
                }
                else {
                    if (d<=152) {
                        return ('es mayo')
                    }
                    else {
                        if (d<=183) {
                            return('es junio')
                        }
                        else {
                            if (d<=214) {
                                return ('es julio')
                            }
                            else {
                                if (d<=245) {
                                    return ('es agosto')
                                }
                                else {
                                    if (d<=276) {
                                        return ('es septiembre')
                                    }
                                    else {
                                        if (d<=307) {
                                            return ('es octubre')
                                        }
                                        else {
                                            if (d<=338) {
                                                return ('es noviembre')
                                            }
                                            else {
                                                if (d<=366) {
                                                    return ('es diciembre')
                                                } 
                                                else {
                                                    return('se paso de los dias del año')
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
}

console.log(dia(120))

function  dia1 (d) {
    if (d<=31) {
        return ('es enero')
    }
    else {
        if (d<=59) {
            return ('es febrero')
        }
        else {
            if (d<=90) {
                return ('es marzo')
            }
            else {
                if (d<=121) {
                    return ('es abril')
                }
                else {
                    if (d<=152) {
                        return ('es mayo')
                    }
                    else {
                        if (d<=183) {
                            return('es junio')
                        }
                        else {
                            if (d<=214) {
                                return ('es julio')
                            }
                            else {
                                if (d<=245) {
                                    return ('es agosto')
                                }
                                else {
                                    if (d<=276) {
                                        return ('es septiembre')
                                    }
                                    else {
                                        if (d<=307) {
                                            return ('es octubre')
                                        }
                                        else {
                                            if (d<=338) {
                                                return ('es noviembre')
                                            }
                                            else {
                                                if (d<=366) {
                                                    return ('es diciembre')
                                                } 
                                                else {
                                                    return('se paso de los dias del año')
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
}

console.log(dia1(120))

//desviasion estandar, moda, mediana cada uno debe tener dos funciones clasica y flecha
//mediana (ingrese tamaño del array)
const mediana = t => {
var v=[], 
    a
for(let i=0; i<t; i++){
  v[i]=Math.round(Math.random()*100)
}
for (var i = 0; i < v.length; i++) {
  for (let j = i + 1; j < v.length; j++) {
    if (v[i] > v[j]) (
    a =  v[i],
    v[i] = v[j],
    v[j] = a
    )
  }
}
if (v.length%2==0) {
    var Mediana=Math.round((v.length)/2)
    return ("la mediano es "+v[Mediana-1]+' y '+v[Mediana]) 
} else {
    var Mediana=Math.round((v.length+1)/2)
    return ("la mediano es "+v[Mediana-1])
}
}
console.log (mediana(12))

function mediana1 (t) {
    var v=[], 
        a
    for(let i=0; i<t; i++){
      v[i]=Math.round(Math.random()*100)
    }
    for (var i = 0; i < v.length; i++) {
      for (let j = i + 1; j < v.length; j++) {
        if (v[i] > v[j]) (
        a =  v[i],
        v[i] = v[j],
        v[j] = a
        )
      }
    }
    if (v.length%2==0) {
        var Mediana=Math.round((v.length)/2)
        return ("la mediano es "+v[Mediana-1]+' y '+v[Mediana]) 
    } else {
        var Mediana=Math.round((v.length+1)/2)
        return ("la mediano es "+v[Mediana-1])
    }
}
console.log (mediana1(12))

//la moda
const moda = t => {
let v=[],
    maxr = 0,
    moda
for(let i=0; i<t; i++){
  v[i]=Math.round(Math.random()*100)
}
for (let l = 0; l < v.length; l++) {
    var numr = 0 
    for (let ñ = l + 1; ñ < v.length; ñ++) {
        if (v[l] == v[ñ]) {
            numr = numr + 1
        };
        if (numr>maxr) {
            moda = v[l]
            maxr = numr
        }
        
    } 
}
return ('la moda es: '+moda)
}
console.log(moda(12))

function moda1 (t) {
    let v=[],
        maxr = 0,
        moda
    for(let i=0; i<t; i++){
      v[i]=Math.round(Math.random()*100)
    }
    for (let l = 0; l < v.length; l++) {
        var numr = 0 
        for (let ñ = l + 1; ñ < v.length; ñ++) {
            if (v[l] == v[ñ]) {
                numr = numr + 1
            };
            if (numr>maxr) {
                moda = v[l]
                maxr = numr
            }
            
        } 
    }
    return ('la moda es: '+moda)
}
console.log(moda1(12))

//desviacion tipica
const desviaciont = t =>{
    let v=[], 
        p = 0
        pf = 0
        d = 0
        sd = 0
        dt = 0
    for(let i=0; i<t; i++){
    v[i]=Math.round(Math.random()*100)
    p = p + v[i]
    }
    pf =Math.trunc(p / v.length)
    for (let i = 0; i < v.length; i++) {
        d =Math.pow((v[i]-pf), 5)
        sd = sd + d
    }
    dt = sd / v.length
    return ('desviacion tipica es: '+dt)
}
console.log(desviaciont(12))

function desviaciont1 (t) {
    let v=[], 
        p = 0
        pf = 0
        d = 0
        sd = 0
        dt = 0
    for(let i=0; i<t; i++){
    v[i]=Math.round(Math.random()*100)
    p = p + v[i]
    }
    pf =Math.trunc(p / v.length)
    for (let i = 0; i < v.length; i++) {
        d =Math.pow((v[i]-pf), 5)
        sd = sd + d
    }
    dt = sd / v.length
    return ('desviacion tipica es: '+dt)
}
console.log(desviaciont1(12))
