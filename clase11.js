var juan = {
    nombre: 'Juan',
    apellido: 'hernandez',
    edad: 17,
    ingeniero: false,    
}
var sacha = {
    nombre: 'Sacha',
    apellido: 'hernandez',
    edad: 19,
    ingeniero: false,   
}
const MAYORIA_EDAD = 18
function esMayorEdad(persona) {
    return persona.edad >= MAYORIA_EDAD    
}
function imprimeMayorEdad(persona) {
    if (esMayorEdad(persona)) {
        console.log(`${persona.nombre} ES MAYOR DE EDAD TIENE: ${persona.edad}`)
    }else{
        console.log(`${persona.nombre} ES MENOR TIENE: ${persona.edad}`)
    }
    
}