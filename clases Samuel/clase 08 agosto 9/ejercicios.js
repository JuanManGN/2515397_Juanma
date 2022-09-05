/*Cuando el número de observaciones es par:
Mediana = (n+1) / 2 → Media de las observaciones

Cuando el número de observaciones es impar:
Mediana = (n+1) / 2 → Valor de la observación*/
//mediana

var v=[], 
    t=Math.round((Math.random()*20-10)+10),
    a
console.log(`Valor variable tam= ${t}`);

for(let i=0; i<t; i++){
  v[i]=Math.round(Math.random()*100)
}
console.log(v)
for (var i = 0; i < v.length; i++) {
  for (let j = i + 1; j < v.length; j++) {
    if (v[i] > v[j]) (
    a =  v[i],
    v[i] = v[j],
    v[j] = a
    )
  }
}
console.log(v)

if (v.length%2==0) {
    var Mediana=Math.round((v.length)/2)
    console.log("la mediano es "+v[Mediana-1]+' y '+v[Mediana]) 
} else {
    var Mediana=Math.round((v.length+1)/2)
    console.log("la mediano es "+v[Mediana-1])
}



//la moda
let v=[], 
    t=Math.round((Math.random()*20-10)+10),
    a,
    maxr = 0,
    moda
console.log(`Valor variable tam= ${t}`);

for(let i=0; i<t; i++){
  v[i]=Math.round(Math.random()*100)
}
console.log(v)
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
console.log('la moda es: '+moda)

//desviacion tipica
let v=[], 
    t=Math.round((Math.random()*20-10)+10),
    p = 0
    pf = 0
    d = 0
    sd = 0
    dt = 0
console.log(`Valor variable tam= `+t);

for(let i=0; i<t; i++){
  v[i]=Math.round(Math.random()*100)
  p = p + v[i]
}
pf =Math.trunc(p / v.length)
console.log(v)
for (let i = 0; i < v.length; i++) {
    d =Math.pow((v[i]-pf), 5)
    sd = sd + d
}
dt = sd / v.length
console.log('desviacion tipica es: '+dt)
