// Iteración #6: Bucles


// <<<<<<<<<<<<<<<<<<<<<<<< !!!!! Ejercicio 1.1 !!!!!>>>>>>>>>>>>>>>>>>
// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
console.log(" Ejercicio 1 ")

for (var a = 0; a <= 9; a++) {
    console.log(a);
  }

// <<<<<<<<<<<<<<<<<<<<<<<< !!!!! Ejercicio 1.2 !!!!!>>>>>>>>>>>>>>>>>>

// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
// cuando el resto del numero dividido entre 2 sea 0.

console.log(" Ejercicio 2 ")

for (var b = 0; b <= 9; b++) {
    if ((b%2)==0){
       console.log(b);  
    }
  }

// <<<<<<<<<<<<<<<<<<<<<<<< !!!!! Ejercicio 1.3 !!!!!>>>>>>>>>>>>>>>>>>

// 1.3 Crea un bucle para conseguir dormir contando ovejas. 
// Este bucle empieza en 0 y termina en 10. 
// Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
// y cambia el mensaje en la última vuelta a 'Dormido!'.

console.log(" Ejercicio 3 ")

for (var c = 0; c <= 9; c++) {
    if (c==9){

      console.log("Intentando Dormir"); 
    } 

      else{
        console.log("Dormido");  
      }

    }

