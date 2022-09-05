numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers.length);

favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");
console.log (favoriteFruits)

//longitud de las frutas
let lengthOfFavoriteFruits = favoriteFruits.push("lime");
console.log (favoriteFruits)
console.log (lengthOfFavoriteFruits)

//metodo splice para poner en un indice determinado
// el primer numero empieza el indice y el segundo elimina
let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes);

//concadenar los arreglos
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);
let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);

//eliminar elementos
arr8.pop();
console.log(arr8);

//eliminar el primer elemento
arr8.shift();
console.log(arr8);

//especificar el indice desde donde se quiere empezar a borrar 
arr8.splice(1, 3);
console.log(arr8);

//buscar valores
arr8 = [ 2, 6, 7, 8 ];
let findValue = arr8.find(function(e) { return e === 2});
let findValue2 = arr8.find(e => e === 8);
console.log(findValue,findValue2); 

//saber en que indice esta (=-1 =no esta)
arr8 = [ 2, 6, 7, 8 ];
let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2);

//indicar desde que indice buscar
arr8 = [ 2, 6, 7, 8 ];
let findIndex3 = arr8.indexOf(6, 2);
console.log(findIndex3)

//buscar la ultima cosa del arreglo
let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");

//organizar de menor a mayor tanto en numeros como letras
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
names.reverse();
console.log(names)

let ages = [18, 72, 33, 56, 40];
ages.sort();
console.log (ages)


//como almacenar arrays entres arrays
let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];
let arrOfArrays = [someValues1, someValues2, someValues3];
console.log (arrOfArrays)

//tambien se puede asi
let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log (arrOfArrays2)


