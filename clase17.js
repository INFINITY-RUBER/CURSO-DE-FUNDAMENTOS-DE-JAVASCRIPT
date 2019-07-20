// Introducción a arrays

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
var personas = [maria, Karoline, andrea, jenni, juan, sacha]
for (var i = 0;i < personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} Mts`)
}