var x = 4, y = '4'
//  x == y  --> TRUE
//  x === y  --> FALSE

var sacha = {
    nombre: 'Sacha'    
}
var otraPerson = {
    nombre: 'Sacha'
}
//sacha == otraPerson ---> false
//sacha === otraPerson ---> false  TIENE OTRO LUGAR DE MEMORIA
var otraPerson1 = sacha  
// otraPerson1 == sacha --> true
// otraPerson1 === sacha --> true
// SI MODIFICAMOS A otraPerson1 TAMBIEN MODIFICA A sacha POR QUE APUNTA LA MISMA MEMORIA

var otraPerson2 = {
    ...sacha
}
//otraPerson2 == sacha --> false
//otraPerson2 === sacha --> false
