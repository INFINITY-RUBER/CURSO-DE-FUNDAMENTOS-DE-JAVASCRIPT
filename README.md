##  Variables: Strings
    var nombre = 'Yeniffer', apellido = 'HErnadez'    
    var  nombreMayuscula = nombre.toUpperCase() // cambiar a Mayusculas
    var apellidominuscula = apellido.toLowerCase() // cambiar a minusc    
    var primerletra = nombre.charAt(0) // la primera letra
    var cantidaletra = nombre.length // total de letra
    var nombreComple = nombre + ' ' + apellido // concatena
    var nombreComple2 = `${nombre} ${apellido.toUpperCase()}`  // concatena y mayscula    
    var ultimaLetra = nombre.substr(-1, 1) // sacar letras (inic, fin)

## Variables: Números
    var edad = 27
    var peso = 75
    // edad = edad + 1
    edad += 1
    // peso = peso - 2
    peso -= 2
    var suma = 0, resta = 0
    suma = edad + peso
    resta = peso - edad    
    var precioVino = 200.3
    var total = precioVino * 3
    var total1 = precioVino * 100 * 3 / 100
    var total2 = Math.round(precioVino * 100 * 3) / 100 // redondea 
    var totalStr = total2.toFixed(2) // pasar a Strin con 2 decimas
    var total3 = parseFloat(totalStr) // pasar de Strin flotante    
    var pizza = 8 
    var person = 2
    var division = pizza / person
## 	Funciones
    var nombre = 'sacha', edad = 28
    function imprimirEdad(n, e) {
        console.log(`${n} tiene ${e} años`)
    }    
    imprimirEdad(nombre, edad)
    imprimirEdad('ruber', 32)
    imprimirEdad('Jenifer', 21)
    imprimirEdad('Andrea', 30)
    imprimirEdad(25, 'Andre')
    imprimirEdad('Andre')
    imprimirEdad()
```javascript
var nombre = 'Ruber'

function imprimeMAyuscula() {
    nombre = nombre.toUpperCase()
    console.log(nombre)}

imprimeMAyuscula()

var nombre1 = 'hernandez'
function imprimeMAyuscula2(n) {
    n = n.toUpperCase(n)
    console.log(n)
}
imprimeMAyuscula2(nombre1)
```
## Objetos
```javascript
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
```
## Desestructurar objetos
```javascript
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
```
## 	Parámetros como referencia o como valor
```javascript
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
```
## Comparaciones en JavaScript
**Existen cinco tipos de datos que son primitivos:**
Existen varias maneras de comparar variables u objetos dentro de javascript. En el primer ejemplo le asignamos a X un valor numérico y a Y un string. Para poder compararlos debemos agregar dos signos de igual **(==)**. Esto los convierte al mismo tipo de valor y permite que se puedan comparar.
Cuando realizamos operaciones es recomendable usar tres símbolos de igual **(===)**. Esto permite que JavasScript no iguale las variables que son de distinto tipo. Te recomendamos que uses el triple igual siempre que estés comparando variables.
1. - Boolean
2. - Null
3. - Undefined
4. - Number
5. - String

```javascript
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
// SI MODIFICAMOS A (otraPerson1) TAMBIEN MODIFICA A (sacha) POR QUE APUNTA LA MISMA LUGAR DE MEMORIA

var otraPerson2 = {
    ...sacha
}
//otraPerson2 == sacha --> false
//otraPerson2 === sacha --> false
```
## Condicionales
```javascript
var sacha = {	 // OBJETO 
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
```
## Funciones que retornan valores
```javascript
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
```
## Arrow functions
```javascript
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
```
## Estructuras repetitivas: for
```javascript
var sacha = {
    nombre: 'Juan',
    apellido: 'hernandez',
    edad: 30,
    peso: 75    
}
const INCREMENTO = 0.2
const AÑO = 365
console.log(`Al inicio de al año ${sacha.nombre} pesa ${sacha.peso} kg`)
const aumentapeso = persona => persona.peso += INCREMENTO // FUNCION RESUMIDA
const bajarpeso = persona => persona.peso -= INCREMENTO
for (var i = 1; i <= AÑO ;  i++){
    var random = Math.random() // NUMERO ALEATORIO
    if (random < 0.25) {
        // aumenta de peso
        aumentapeso(sacha) // LLAMA LA FUNCION Y EL OBJETO       
    } else if (random < 0.5) {
        // bajar peso
        bajarpeso(sacha)
    }
}
console.log(`Al final de al año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)} kg`)
```
## Estructuras repetitivas: while
```javascript
var sacha = {
    nombre: 'sacha',
    apellido: 'hernandez',
    edad: 30,
    peso: 70    
}
const INCREMENTO = 0.2
const AÑO = 365
console.log(`Al inicio de al año ${sacha.nombre} pesa ${sacha.peso} kg`)
const aumentapeso = persona => persona.peso += INCREMENTO // FUNCION RESUMIDA
const bajarpeso = persona => persona.peso -= INCREMENTO
const comeMucho = () => Math.random() < 0.3
const haceDeporte = () => Math.random() < 0.4
const META = sacha.peso - 3
var Dias = 0
while (sacha.peso > META) {
    // debugger
    if (comeMucho()) {
        // AUMENTAR PESO
        aumentapeso(sacha)
    }
    if (haceDeporte) {
        // BAJAR PESO
        bajarpeso(sacha)
    }
    Dias += 1
}
console.log(`Pasaron ${Dias} dias hasta que ${sacha.nombre} adelgazo`)
```
## Estructuras repetitivas: Do while
```javascript
var contador = 0
const llueve = () => Math.random() < 0.25
do {
    contador ++

} while (!llueve());
console.log(`FUI A VER SI LLOVIA ${contador} ${contador > 1 ? 'VECES':'VEZ'}`)
```
## Condicional múltiple: switch
```javascript
//Condicional múltiple: switch
var signo = prompt('¿Que singo eres y para ver en que mes Naciste?') // hacerle pregunta al usuario
switch (signo) {
    case 'Acuario':
    case 'acuario':
        console.log('Enero 20 – Febrero 18')
        break;
    case 'Piscis':
    case 'piscis':
        console.log('(Febrero 19 – Marzo 20)')
        break;
    case 'Aries':
    case 'aries':
        console.log('(Marzo 21 –Abril 19)')
        break;
    case 'Tauro':
    case 'tauro':
        console.log('(Abril 20 – Mayo 20)')
        break;
    case 'Géminis':
    case 'geminis':
        console.log('(Mayo 21 – Junio 20)')
        break;
    default:
        console.log('no esta en mi base de datos')            
        break;
}
```
## Introducción a arrays
```javascript
// Introducción a arrays
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
var personas = [maria, Karoline, andrea]
for (var i = 0;i < personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} Mts`)
}
```
### Filtrar un array 
```javascript
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
```
### Transformar un array

```javascript
personas = [maria, Karoline, andrea, jenni, juan, sacha]
//     const pasarAlturaCms = persona => {
// //    (personas.altura = personas.altura * 100) 
//      persona.altura *=  100  // multiplica y guarda ese valor en el objeto
//      return persona 
// const pasarAlturaCms = persona => {
//        // multiplica pero en un nuevo objeto sin altarar al inicial
//      return {
//          ...persona,
//          altura: persona.altura * 100
//      } esto es lo mismo que --->
//  }
const pasarAlturaCms = persona => ({
    ...persona,
    altura: persona.altura * 100     
 })
var personasCms = personas.map(pasarAlturaCms)
console.log(personasCms)
```
### Reducir un array a un valor
```javascript
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
// ---------------------otro ejemplo------------------------
var array = [20, 34, 4, 8]
var suma = 0
for (var i = 0; i < array.length; i++) {
    suma += array[i]
}
var promedio = suma / array.length
console.log(`En promedio es: ${promedio}`)
```

