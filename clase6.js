// Objetos
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
    var nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}
imprimeNombreMayuscula(sacha)
imprimeNombreMayuscula(dario)
// forma 2
function imprimeNombreMayuscula2(persona) {
    console.log(persona.nombre.toUpperCase())
}
imprimeNombreMayuscula2(sacha)
imprimeNombreMayuscula2(dario)
// forma 3
function imprimeNombreMayuscula3({nombre}) {
    console.log(nombre.toUpperCase())
}
imprimeNombreMayuscula3(sacha)
imprimeNombreMayuscula3(dario)

imprimeNombreMayuscula3({nombre: 'Ruber'})


