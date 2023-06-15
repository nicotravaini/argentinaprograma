const readlineSync = require('readline-sync');
const numeroEntero = readlineSync.question("Ingrese un numero entero por favor: ");
if(numeroEntero > 0 && numeroEntero % 2 == 0){
    console.log("El numero es positivo y par");
} else if(numeroEntero > 0 && numeroEntero % 2 == 1){
    console.log("El numero es postivo e impar");
} else if(numeroEntero < 0){
    console.log("El numero es negativo");
} else if(numeroEntero == 0){
    console.log("El numero es cero");
}