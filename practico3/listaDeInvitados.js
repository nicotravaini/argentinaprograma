let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let rechazados = [];
let admitidos = [];
for(i = 0; i < personas.length; i++){
    if(personas[i] == "Jose" || personas[i] == "Sofia"){
        rechazados.push(personas[i]);
    } else {
        admitidos.push(personas[i]);
    }
}
console.log("La lista de invitados admitidos es:"); 
admitidos.forEach(elemento => console.log(elemento));
console.log("La lista de invitados rechazados es:"); 
rechazados.forEach(elemento => console.log(elemento));

// EXTRA

for(let i = 0; i < admitidos.length -1; i++){
    let posicionDelMinimo = i;
    for(let j = i; j < admitidos.length; j++){
        if(admitidos[j].toLowerCase() < admitidos[posicionDelMinimo].toLowerCase()){
            posicionDelMinimo = j;
        }
    }
    let temp = admitidos[i];
    admitidos[i] = admitidos[posicionDelMinimo];
    admitidos[posicionDelMinimo] = temp
}

console.log("La lista ordenada de invitados admitidos es:"); 
admitidos.forEach(elemento => console.log(elemento));

