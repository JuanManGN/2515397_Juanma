let n = []
    d = ["manzana","uva","papaya","banano","mango","platano","naranja","cereza","coco","limon"]
    t = Math.round(Math.random()*d.length)
    e =  Math.round((Math.random()*6))
console.log(e) 
while (t>n.length) {
    n[n.length] = d[n.length] 
} 
console.log(n)
//agregamos
if (e==0){
n.push(d[n.length])
console.log(n)}
//eliminamos ultimo
else if  (e==1)
{
n.pop()
console.log(n)}
//eliminamos primero
else if (e==2)
{n.shift()
console.log(n)}
//ordenar ascendente    
else if (e==3)
{n.sort()
console.log(n)}  
//ordenar decendente
else if (e==4)           
{n.sort()
n.reverse()
console.log(n)}
//sobreescribir elementos
else if (e==5)
{t1 = Math.round(Math.random()*t)
n[t1] = ("fresa")
console.log(n)}
//buscar
else if (e==6)
{let valor = n.indexOf(n[20])
console.log(n[t1])
console.log(valor)}

else {
    console.log ("El programa finalizo")
} 


let nom = ["Vane","Juan","Johan","Angie","Maicol","kate","Ana","Alfonso","Laura","Beos","Tatiana","Leandra","Alejandra","Esteban","Karol"]
    t3 = Math.round(Math.random()*nom.length)
console.log(t3) 
do {
    n[n.length] = nom[n.length]
} while (t3>n.length);
consol ,e.log(n)

//salir
var i = prompt ("¿desea salir?")
    n = "si"

if (i==n) {
    window.close()
}