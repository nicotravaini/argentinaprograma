const readlineSync = require('readline-sync');
const numero = readlineSync.question('Ingrese un numero del 1 al 12 por favor: ');
let mes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let cantidadDeDias = {ene: 31, feb: 28, mar: 31, abr: 30, may: 31, jun: 30, jul: 31, ago: 31, sep: 30, oct: 31, nov: 30, dic: 31};
if(numero == 1){
    console.log(`La cantidad de dias del mes de ${mes[0]} es ${cantidadDeDias.ene}`);
} else if(numero == 2){
    console.log(`La cantidad de dias del mes de ${mes[1]} es ${cantidadDeDias.feb}`);
} else if(numero == 3){
    console.log(`La cantidad de dias del mes de ${mes[2]} es ${cantidadDeDias.mar}`);
} else if(numero == 4){
    console.log(`La cantidad de dias del mes de ${mes[3]} es ${cantidadDeDias.abr}`);
} else if(numero == 5){
    console.log(`La cantidad de dias del mes de ${mes[4]} es ${cantidadDeDias.may}`);
} else if(numero == 6){
    console.log(`La cantidad de dias del mes de ${mes[5]} es ${cantidadDeDias.jun}`);
} else if(numero == 7){
    console.log(`La cantidad de dias del mes de ${mes[6]} es ${cantidadDeDias.jul}`);
} else if(numero == 8){
    console.log(`La cantidad de dias del mes de ${mes[7]} es ${cantidadDeDias.ago}`);
} else if(numero == 9){
    console.log(`La cantidad de dias del mes de ${mes[8]} es ${cantidadDeDias.sep}`);
} else if(numero == 10){
    console.log(`La cantidad de dias del mes de ${mes[9]} es ${cantidadDeDias.oct}`);
} else if(numero == 11){
    console.log(`La cantidad de dias del mes de ${mes[10]} es ${cantidadDeDias.nov}`);
} else if(numero == 12){
    console.log(`La cantidad de dias del mes de ${mes[11]} es ${cantidadDeDias.dic}`);
}