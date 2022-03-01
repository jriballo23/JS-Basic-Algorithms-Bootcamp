// ```jsx
// 1.1 Consigue el valor "HULK" del array de cars y muestralo por consola.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

// 1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
// Muestra en consola el último personaje del array
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
// ```

// <<<<<<<<<<<<<<<<<<<<<<<< !!!!! Ejercicio 1.1 !!!!!>>>>>>>>>>>>>>>>>>
console.log("");

console.log("<<<<<<Ejercicio 1.1>>>>>>");

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers[0]);

// <<<<<<<<<<<<<<<<<<<<<<<< !!!!! Ejercicio 1.2 !!!!!>>>>>>>>>>>>>>>>>>
console.log("<<<<<<Ejercicio 1.2>>>>>>");

const avengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

avengers1[0]= "IRONMAN";

console.log(avengers1);

// <<<<<<<<<<<<<<<<<<<<<<<< !!!!! Ejercicio 1.3 !!!!!>>>>>>>>>>>>>>>>>>


console.log("<<<<<<Ejercicio 1.3>>>>>>");

const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers2.length);

// <<<<<<<<<<<<<<<<<<<<<<<< !!!!! Ejercicio 1.4 !!!!!>>>>>>>>>>>>>>>>>>
console.log("<<<<<<Ejercicio 1.4>>>>>>");

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty");
rickAndMortyCharacters.push("Summer");
console.log(rickAndMortyCharacters);
console.log(rickAndMortyCharacters.length);


// <<<<<<<<<<<<<<<<<<<<<<<< !!!!! Ejercicio 1.5 !!!!!>>>>>>>>>>>>>>>>>>

console.log("<<<<<<Ejercicio 1.5>>>>>>");

const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]
rickAndMortyCharacters1.pop(rickAndMortyCharacters1);
console.log(rickAndMortyCharacters1);
console.log(rickAndMortyCharacters1[0]);
let latestItems =(rickAndMortyCharacters1.length-1);
console.log(rickAndMortyCharacters1[latestItems]);

// <<<<<<<<<<<<<<<<<<<<<<<< !!!!! Ejercicio 1.6 !!!!!>>>>>>>>>>>>>>>>>>

console.log("<<<<<<Ejercicio 1.6>>>>>>");

const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.splice(1,1);
console.log(rickAndMortyCharacters2);

console.log("");