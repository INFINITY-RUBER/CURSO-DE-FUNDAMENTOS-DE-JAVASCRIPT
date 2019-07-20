//  arrays con filtros

var sacha = {
    nombre: 'sacha',
    apellido: 'hernandez',
    altura: 1.65    
}
var juan = {
    nombr:'juan',
    apellido: 'perez',
    altura: 1.55    
}
var jenni = {
    nombre: 'jenni',
    apellido: 'perdomo',
    altura: 1.85    
}
var andrea = {
    nombre: 'andrea',
    apellido: 'bolañoz',
    altura: 1.95    
}
var Karoline = {
    nombre: 'Karoline',
    apellido: 'Ortiz',
    altura: 1.55    
}
var maria = {
    nombre: 'maria',
    apellido: 'hernandez',
    altura: 1.75    
}
// @funcion
// const esAlta = (persona) => {
//     return persona.altura > 1.8
// } queda resumido asi:
// const esAlta = persona => persona.altura > 1.8
const esAlta = ({altura}) => altura > 1.8
const esbajo = ({altura}) => altura < 1.8

var personas = [maria, Karoline, andrea, jenni, juan, sacha]
// var personaAltas = personas.filter(function (persona) { otra forma de expresarlo
//     return persona.altura > 1.8
// })
var personaAltas = personas.filter(esAlta)
var personaBajas = personas.filter(esbajo)

console.log(`${personaAltas}`)
console.log(`${personaBajas}`)

