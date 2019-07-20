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
// const esMayorEdad = function (persona) {
    // return persona.edad >= MAYORIA_EDAD    
// }  
// ----> se puede resumir en:
// const esMayorEdad = (persona) => {
//     return persona.edad >= MAYORIA_EDAD    
// } 
// ----> si solo retorna un valor se resume en:
// const esMayorEdad = persona => persona.edad >= MAYORIA_EDAD  
// ---->  y se puede resumir en:
const esMayorEdad = ({edad}) => edad >= MAYORIA_EDAD    

function imprimeMayorEdad(persona) {
    if (esMayorEdad(persona)) {
        console.log(`${persona.nombre} ES MAYOR DE EDAD TIENE: ${persona.edad}`)
    }else{
        console.log(`${persona.nombre} ES MENOR TIENE: ${persona.edad}`)
    }    
}
function permitirAcceso(persona){
    if (!esMayorEdad(persona)) {
        console.log('ACCESO DENEGADO')        
    }else{
        console.log('ACCESO PERMITIDO') 
    }
}