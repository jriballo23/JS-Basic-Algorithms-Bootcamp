// **Iteración #5: Condicionales**

let number1 = 10;
let number2 = 20;
let number3 = 2;


// // ejemplo
// if(number1 === 10){
//     console.log('number1 es estrictamente igual a 10')
// }
console.log("<<<<<<Ejemplo 1>>>>>>");

if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}


// if (/* COMPLETAR */) {
//   console.log("number2 dividido entre number1 es igual a 2");
// }
console.log("<<<<<<Ejemplo 2>>>>>>");

if ((number2/number1)===2) {
  console.log("number2 dividido entre number1 es igual a 2");
}


// if (/* COMPLETAR */) {
//   console.log("number1 es estrictamente distinto a number2");
// }

console.log("<<<<<<Ejemplo 3>>>>>>");
if (number1!==number2) {
  console.log("number1 es estrictamente distinto a number2");
}


// if (/* COMPLETAR */) {
//   console.log("number3 es distinto number1");
// }

console.log("<<<<<<Ejemplo 4>>>>>>");
if (number3!=number1) {
  console.log("number3 es distinto number1");
}


// if (/* COMPLETAR */) {
//   console.log("number3 por 5 es igual a number1");
// }

console.log("<<<<<<Ejemplo 5>>>>>>");
if ((number3*5)==number1) {
  console.log("number3 por 5 es igual a number1");
}


// if (/* COMPLETAR */) {
//   console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
// }
console.log("<<<<<<Ejemplo 6>>>>>>");

if (((number3*5)==number1) && ((number1*2)==number2)) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}



// if (/* COMPLETAR */) {
//   console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
// }

console.log("<<<<<<Ejemplo 7>>>>>>");

if (((number2/2)==number1)||((number1/5)==number3)) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}
