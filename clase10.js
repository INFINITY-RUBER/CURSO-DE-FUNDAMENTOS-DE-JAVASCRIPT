var sacha = {
    nombre: 'Sacha',
    apellido: 'hernandez',
    edad: 17,
    ingeniero: false,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: true
}
function imprimirProfeciones(persona) {
    console.log(`${persona.nombre} es: `)
    if (persona.ingeniero) {
        console.log('Ingeniero')        
    }else{
        console.log('NO es Ingeniero')     
    }
    if (persona.cocinero) {
        console.log('cocinero')        
    }
    if (persona.cantante) {
        console.log('cantante')        
    }
    if (persona.dj) {
        console.log('dj')        
    }
    if (persona.drone) {
        console.log('vuela drones')        
    }
    if (persona.edad >= 18) { // RETO DE EDAD
        imprimeMayor(persona)        
    }else{
        imprimeMenor(persona)

    }
}
imprimirProfeciones(sacha)

function imprimeMayor(persona) { // RETO DE EDAD
    console.log(`${persona.nombre} ES MAYOR DE EDAD TIENE: ${persona.edad}`)     
}
function imprimeMenor(persona) { // RETO DE EDAD
    console.log(`${persona.nombre} ES MENOR DE SOLO TIENE: ${persona.edad}`)
}
