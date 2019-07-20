// Introducción a arrays

var sacha = {
    nombre: 'sacha',
    apellido: 'hernandez',
    altura: 1.65,
    cantidadlibros: 100    
}
var juan = {
    nombr:'juan',
    apellido: 'perez',
    altura: 1.55,
    cantidadlibros: 10    
}
var jenni = {
    nombre: 'jenni',
    apellido: 'perdomo',
    altura: 1.85,
    cantidadlibros: 130    
}
var andrea = {
    nombre: 'andrea',
    apellido: 'bolañoz',
    altura: 1.95,
    cantidadlibros: 170    
}
var Karoline = {
    nombre: 'Karoline',
    apellido: 'Ortiz',
    altura: 1.55,
    cantidadlibros: 180    
}
var maria = {
    nombre: 'maria',
    apellido: 'hernandez',
    altura: 1.75,
    cantidadlibros: 150    
}
var personas = [maria, Karoline, andrea, jenni, juan, sacha]
// ---------------------forma 1----------------------------------
// var acum = 0
// for (var i = 0;i < personas.length; i++){
//     acum += personas[i].cantidadlibros
// }
//console.log(`En total tienen ${acum} Libros`)
// ---------------------forma 2----------------------------------
// const reducer = (acum, persona) =>{
//     return acum + persona.cantidadlibros    
// }
// var totalLibros = personas.reduce(reducer, 0)
// console.log(`En total tienen ${totalLibros} Libros`)
// ---------------------resumiendo el codigo------------------------
const reducer = (acum, {cantidadlibros}) => acum + cantidadlibros    
var totalLibros = personas.reduce(reducer, 0)
var suma = 0
console.log(`En total tienen ${totalLibros} Libros`)

for (var i = 0; i < personas.length; i++) {
    suma += personas[i].cantidadlibros
}
var promedio = suma / personas.length
console.log(`En promedio de los libros es: ${promedio}`)
// ---------------------otro ejemblo------------------------
var array = [20, 34, 4, 8]
var suma = 0
for (var i = 0; i < array.length; i++) {
    suma += array[i]
}
var promedio = suma / array.length
console.log(`En promedio es: ${promedio}`)



