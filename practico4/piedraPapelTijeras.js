const readlineSync = require('readline-sync');
const piedra = "piedra";
const papel = "papel";
const tijera = "tijera";
const opcionesJugadas = [piedra, papel, tijera];




function obtenerJugadaComputadora(opciones){
    let computadora = opciones[Math.floor(Math.random() * 3)].toLowerCase();
    return computadora;
}


function obtenerJugadaUsuario(opciones){
    let usuario;
    let usuarioIncorrecto = !opciones.includes(usuario);
    while(usuarioIncorrecto){
        usuario = readlineSync.question("Ingresa una opcion entre piedra, papel o tijera: ").toLowerCase();
        if(!opciones.includes(usuario)){
            console.log("La opcion tiene que ser piedra, papel o tijera");
        } else if(opciones.includes(usuario)){
            usuarioIncorrecto = false;
        }
    }
    return usuario;
}

function determinarGanador(jugadaComputadora, jugadaUsuario){
    if(jugadaComputadora == jugadaUsuario){
        return "Empate"
    } else if((jugadaComputadora == piedra && jugadaUsuario == tijera) || (jugadaComputadora == papel && jugadaUsuario == piedra) || (jugadaComputadora == tijera && jugadaUsuario == papel)){
        return "Gana la computadora";
    } else {
        return "Gana el usuario";
    }
}

// EXTRA 2 
let resultado;
let victoriasComputadora = 0;
let victoriasUsuario = 0;
let empates = 0;
let jugadas = 0;

function cuantasJugadas(eleccion){
    let cantidadJugadas = 0;
    let errorJugadas = !eleccion.includes(cantidadJugadas);
    while(errorJugadas){
        cantidadJugadas = readlineSync.questionInt(
            "Elige en cuantas jugadas quieres terminar el juego:\n" +
            "(1) - La cantidad de partidas necesarias hasta que haya un ganador.\n" +
            "(2) - Dos partidas: Se juegan dos partidas, puede terminar en empate.\n" +
            "(3) - Diferencia de 2: hasta que exista una diferencia de dos partidas ganadas.\n" +
            "Usuario elige: ")
        if(!eleccion.includes(cantidadJugadas)){
            console.log("OPCION INVALIDA:");
        } else if(eleccion.includes(cantidadJugadas)){
            errorJugadas = false;
        }
    }
    return cantidadJugadas;
}

function main(){
    let opcionesDeJuego = [1, 2, 3];
    let partidas = cuantasJugadas(opcionesDeJuego)
    while(partidas == 1 && !(resultado == "Gana la computadora" || resultado == "Gana el usuario")
        || partidas == 2 && jugadas != 2
        || partidas == 3 && !(victoriasComputadora - victoriasUsuario == 2 || victoriasUsuario - victoriasComputadora == 2)){
            let computadora = obtenerJugadaComputadora(opcionesJugadas);
            let usuario = obtenerJugadaUsuario(opcionesJugadas);
            resultado = determinarGanador(computadora, usuario);
            if(resultado == "Gana la computadora"){
                victoriasComputadora += 1;
            } else if(resultado == "Gana el usuario"){
                victoriasUsuario += 1;
            } else if(resultado == "Empate"){
                empates++;
            }
            jugadas++;
            console.log(`El usuario eligio: ${usuario}\nLa computadora eligio: ${computadora}\nvictorias computadora: ${victoriasComputadora}\nvictorias usuario: ${victoriasUsuario}\nGanador de la ronda: ${resultado}`);
            // CONDICION PARA CONTAR VICTORIAS 
            if(victoriasComputadora - victoriasUsuario == 2){
                console.log("EL GANADOR ES LA COMPUTADORA");
            } else if(victoriasUsuario - victoriasComputadora == 2){
                console.log("EL GANADOR ES EL USUARIO");
            } else if(partidas == 2 && victoriasComputadora == 1 && empates == 1){
                console.log("EL GANADOR ES LA COMPUTADORA");
            } else if(partidas == 2 && victoriasUsuario == 1 && empates == 1){
                console.log("EL GANADOR ES EL USUARIO");
            } else if(partidas == 2 && (empates == 2 || victoriasComputadora == 1 & victoriasUsuario == 1)){
                console.log("ES UN EMPATE");
            }
    } 
}

main();