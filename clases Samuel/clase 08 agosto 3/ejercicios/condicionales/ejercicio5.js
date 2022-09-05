/*En un juego de preguntas a las que se responde “Si” o “No” gana quien
responda correctamente las tres preguntas. Si se responde mal a cualquiera de
ellas ya no se pregunta la siguiente y termina el juego. Las preguntas son:
1. Colon descubrió América?
2. La independencia de Colombia fue en el año 1810?
3. The Doors fue un grupo de rock Americano?*/ 
var R1 =Math.round(Math.random()*1)
var R2 =Math.round(Math.random()*1)
var R3 =Math.round(Math.random()*1)
console.log(R1+' '+R2+' '+R3);
console.log('¿Colon descubrió América?')
if (R1==0) {
    R1 = 'si'
    console.log('¿La independencia de Colombia fue en el año 1810?')
    if (R2==0) {
        R2 = 'si'
        console.log('¿The Doors fue un grupo de rock Americano?')
    }
    if (R3==0) {
        R3 = 'si'
        console.log('Felicidades pasaste el juego')
    }
}