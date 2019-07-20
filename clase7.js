// Desestructurar objetos
var sacha = {
    nombre: 'Sacha',
    apellido: 'hernandez',
    edad: 28
}
var dario = {
    nombre: 'Dario',
    apellido: 'Jimenez',
    edad: 30
} // forma 1
function imprimeNombreMayuscula(persona) {
    // var nombre = persona.nombre ---> da lo mismo = var {nombre} = persona
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}
imprimeNombreMayuscula(sacha)
imprimeNombreMayuscula(dario)

function imprimeEdadNombre(persona) {
    var { nombre } = persona, { edad } = persona
    console.log(`Hola soy ${nombre} y ahora tengo ${edad} años`)    
}
function imprimeEdadNombre1(persona) {
    let { nombre, edad } = persona
    console.log(`soy ${nombre} y ahora tengo ${edad} años`)
}
imprimeEdadNombre(sacha)
imprimeEdadNombre1(dario)


