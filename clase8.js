var sacha = {
    nombre: 'Sacha',
    apellido: 'hernandez',
    edad: 28
}
var dario = {
    nombre: 'Dario',
    apellido: 'Jimenez',
    edad: 30
}

function cumpleaños(persona) { // SE  VA A INCREMENTAR LA EDAD 
    persona.edad += 1    
}
function cumpleaños2(edad) { // NO PASA NADA 
    edad += 1    
}
function cumpleaños3(persona) { // NOS DEVUELVE UN OBJETO NUEVO INCREMENTADO 
    return {
        ...persona,
        edad: persona.edad + 1
    }    
}