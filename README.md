##  Variables: Strings
```javascript
    var nombre = 'Yeniffer', apellido = 'HErnadez'    
    var  nombreMayuscula = nombre.toUpperCase() // cambiar a Mayusculas
    var apellidominuscula = apellido.toLowerCase() // cambiar a minusc    
    var primerletra = nombre.charAt(0) // la primera letra
    var cantidaletra = nombre.length // total de letras del string
    var nombreComple = nombre + ' ' + apellido // concatena string
    var nombreComple2 = `${nombre} ${apellido.toUpperCase()}`  // interpolar variables y concatena y mayscula    
    var ultimaLetra = nombre.substr(-1, 1) // sacar letras (inic, fin)
```
_
## Variables: Números
```javascript
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
    var total2 = Math.round(precioVino * 100 * 3) / 100 // redondea el numero
    var totalStr = total2.toFixed(2) // pasar a Strin con 2 decimas
    var total3 = parseFloat(totalStr) // pasar de Strin flotante    
    var pizza = 8 
    var person = 2
    var division = pizza / person
```
## 	Funciones
Las funciones son fracciones de código reutilizable. En esta clase aprenderemos a definir e invocar nuestras funciones. Para definir una función utilizaremos la palabra reservada ““function””.
Delimitamos el cuerpo de la función usando llaves { }. Los parámetros de la función son variables que se pasan a la función escribíendolos entre paréntesis ()
Definir funciones nos sirve para reutilizar código. JavaScript es un lenguaje interpretado, esto quiere decir que intentará ejecutar el código sin importar si los parámetros que le pasemos a la función estén invertidos o incluso incompletos.
```javascript
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
```
## El alcance de las funciones
En esta clase hablaremos del alcance que tienen las funciones. Si una variable no está definida dentro del cuerpo de una función hablamos de una variable global. Por el contrario, una variable definida dentro de una función es una variable local.
Para que la ejecución de una función no modifique una variable global usamos parámetros en lugar de pasar directamente la variable.
Es posible utilizar el mismo nombre para una variable global y para el parámetro de una función con un alcance local.
```javascript
var nombre = 'Ruber'

function imprimeMAyuscula() {
    nombre = nombre.toUpperCase() // devuelve en mayusculas
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
Vamos a empezar a trabajar con objetos, veremos cómo declararlos, cuáles son sus ventajas, cómo asignarles atributos y cómo trabajar con ellos dentro de las funciones.
Los objetos se definen delimitados mediante llaves {}
Un atributo se compone de una clave (key) y un valor (value), que se separan entre sí por dos puntos “”:"". Los valores pueden ser de tipo string, número, booleano, etc. Cada atributo está separado del siguiente por una coma. Un objeto puede tener todos los atributos que sean necesarios.
Escribir el nombre de un objeto separado por un punto del nombre de un atributo, nos permite acceder al valor de dicho atributo para ese objeto. Un objeto también se puede pasar como atributo en una unción.
Las últimas versiones de JavaScript nos permiten desglosar el objeto para acceder únicamente al atributo que nos interesa. Esto se consigue encerrando el nombre del atributo entre llaves { 
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
En esta clase aprenderemos otra forma de acceder a los atributos de los objetos que es la desestructurización de los mismos.
Para no duplicar las variables introducir el nombre de la variable como parámetro de la segunda variable. Ej var{nombre} = persona
Reto: resolver la función que está comentada al final del ejercicio.
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
Javascript se comporta de manera distinta cuando le pasamos un objeto como parámetro. Cuando los objetos se pasan como una referencia, estos se modifican fuera de la función. Para solucionar esto se puede crear un objeto diferente. Esto lo podemos hacer colocando tres puntos antes del nombre. Ej…persona.
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
    var random = Math.random() // NUMERO ALEATORIO entre  0 y 1
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
En esta clase aprenderemos como filtrar los arrays. Para filtrar siempre necesitamos establecer una condición. En este ejemplo nuestra condición es que la estatura de las personas sea mayor de 1.80mts.
El método filter ( ) crea una nueva matriz con todos los elementos que pasan la prueba implementada por la función proporcionada. Recuerda que si no hay elementos que pasen la prueba, filter devuelve un array vacío. Reto: escribe el filtrado de personas bajas.
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
## Cómo funcionan las clases en JavaScript
Las clases de JavaScript son introducidas en el ECMAScript 2015 y son una mejora en la sintaxis sobre la herencia basada en prototipos de JavaScript.
La palabra clave extends se usa en declaraciones de clase o expresiones de clase para crear una clase que es hija de otra clase. El método constructor es un método especial para crear e inicializar un objeto creado a partir de una clase.
```javascript
function persona(nombre, apellido, alto) {
    this.nombre = nombre
    this.apellido = apellido   
    this.alto = alto // implicitamente retorna this
}
persona.prototype.saludar =  () => {
    console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
}
persona.prototype.soyAlto =  () => this.alto >= 1.7

var sacha = new persona('Ruber', 'Hernandez', 1.9)
var erika = new persona('erika', 'Hynohaza', 1.5)
var jenny = new persona('jenny', 'Ordoñez', 1.8)

sacha.soyAlto()
erika.soyAlto()
jenny.soyAlto()
```
### El contexto de las funciones: quién es this
Recuerda que dentro de la arrow function, this está haciendo referencia al espacio global, a windows.
```javascript
function persona(nombre, apellido, alto) {
    this.nombre = nombre
    this.apellido = apellido   
    this.alto = alto // implicitamente retorna this
}
persona.prototype.saludar = function () {
    console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
}
persona.prototype.soyAlto =  function() {
    
    return this.alto >= 1.7
}
var sacha = new persona('Ruber', 'Hernandez', 1.9)
var erika = new persona('erika', 'Hynohaza', 1.5)
var jenny = new persona('jenny', 'Ordoñez', 1.8)

sacha.soyAlto()
erika.soyAlto()
jenny.soyAlto()
```

## La verdad oculta sobre las clases en JavaScript
Los objetos en JavaScript son “contenedores” dinámicos de propiedades. Estos objetos poseen un enlace a un objeto prototipo. Cuando intentamos acceder a la propiedad de un objeto, la propiedad no sólo se busca en el propio objeto sino también en el prototipo del objeto, en el prototipo del prototipo, y así sucesivamente hasta que se encuentre una propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos.
```javascript
function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () {}
    fn.prototype = prototipoHijo.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}
function persona(nombre, apellido, alto) {
    this.nombre = nombre
    this.apellido = apellido   
    this.alto = alto // implicitamente retorna this
}
persona.prototype.saludar = function () {
    console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
}
persona.prototype.soyAlto =  function() {
    
    return this.alto >= 1.7
}
function desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}
heredaDe(desarrollador, persona)
desarrollador.prototype.saludar = function() {
    console.log(`hola, me llamo ${this.nombre} ${this.apellido} y soy un desarrolador`)
}
// var sacha = new persona('Ruber', 'Hernandez', 1.9)
// var erika = new persona('erika', 'Hynohaza', 1.5)
// var jenny = new persona('jenny', 'Ordoñez', 1.8)
// sacha.soyAlto()
// erika.soyAlto()
// jenny.soyAlto()
```
## Clases en JavaScriptvar 
La palabra clave extends se usa en declaraciones de clase o expresiones de clase para crear una clase que es hija de otra clase. El método constructor es un método especial para crear e inicializar un objeto creado a partir de una clase.
```javascript
class persona {
    constructor(nombre, apellido, alto) {
        this.nombre = nombre
        this.apellido = apellido
        this.alto = alto // implicitamente retorna this
    }
    saludar(){
        console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto(){
        return this.alto >= 1.7
    }
}
class Desarrollador extends persona {
    constructor(nombre, apellido, alto) {
        super(nombre, apellido, alto) // SUPER  llama al construtor de la clase padre
        
    }
    saludar(){
        console.log(`hola, me llamo ${this.nombre} ${this.apellido} y soy un desarrolador`)

    }
}
```
## Funciones como parámetros
```javascript
class persona {
    constructor(nombre, apellido, alto) {
        this.nombre = nombre
        this.apellido = apellido
        this.alto = alto // implicitamente retorna this
    }
    saludar(fn){
        var { nombre, apellido } = this
        console.log(`hola me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre, apellido)            
        }
    }
    soyAlto(){
        return this.alto >= 1.7
    }
}
class Desarrollador extends persona {
    constructor(nombre, apellido, alto) {
        super(nombre, apellido, alto)
        
    }
    saludar(fn){
        // var nombre = this.nombre
        // var apellido = this.apellido ---> ser resume:
        var {nombre, apellido} = this
        console.log(`hola, me llamo ${nombre} ${apellido} y soy un desarrolador`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}
function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido} y soy un desarrolador`)
    if (esDev) {
        console.log(`ah mira , no sabia que eras desarrollador`)        
    }    
}
var sacha = new persona('Ruber', 'Hernandez', 1.9)
var erika = new persona('erika', 'Hynohaza', 1.5)
var jenny = new Desarrollador('jenny', 'Ordoñez', 1.8)
sacha.saludar()
erika.saludar(responderSaludo)
jenny.saludar(responderSaludo)
```
## Cómo funciona el tiempo en JavaScript
En principio, cualquier tarea que se haya delegado al navegador a través de un callback, deberá esperar hasta que todas las instrucciones del programa principal se hayan ejecutado. Por esta razón el tiempo de espera definido en funciones como setTimeout,no garantizan que el callback se ejcute en ese tiempo exactamente, sino en cualquier momento a partir de allí, sólo cuando la cola de tareas se haya vaciado.
```javascript
<title>Cómo funciona el tiempo en JavaScript</title>
              
    </head>
    <body>
        <script>
            console.log('a');
            setTimeout(() => console.log('b'), 0);
            console.log('c')
        </script>
    
    </body>
</html>
```
## Callbacks
Un callback es una función que se pasa a otra función como un argumento. Esta función se invoca, después, dentro de la función externa para completar alguna acción
https://code.jquery.com/

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>clase 1 variables</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1"     
    </head>
    <body>  
        <script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous"></script>    
        <script 
        src="clase28.js">
        </script>
    
    </body>
</html>
```
```javascript
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const LukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const onPeopleResponse = function (persona) {
    console.log(`hola yo soy, ${persona.name} `)
}
$.get(LukeUrl, opts, onPeopleResponse )
```
## Haciendo múltiples requests
```javascript
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }
const onPeopleResponse = function (persona) {
    console.log(`hola yo soy, ${persona.name} `)
}
function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse )    
}
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
```
## Manejando el Orden y el Asincronismo en JavaScript
```javascript
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }
function obtenerPersonaje(id, callback) {
    console.log(id)
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, function (persona) {
        console.log(`hola yo soy, ${persona.name} `)
        if (callback) {
            callback()            
        }
    })   
}
obtenerPersonaje(1, function () { //  EL INFIERNO DEL CALLBACK 
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function () {
            obtenerPersonaje(4, function () {
                obtenerPersonaje(5, function () {
                    obtenerPersonaje(6, function () {
                        obtenerPersonaje(7, function () {
                            
                        })
                    })
                })
            })
        })
    })
})
```
## Manejo de errores con callbacks
```javascript
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }
function obtenerPersonaje(id, callback) {
    console.log(id)
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
    .get(url, opts, callback)
    .fail( () => {
        console.log(`Paila tenemos problemas, No se encontro el personaje ${id} `)
    })
}
obtenerPersonaje(1, function (personaje) { //  EL INFIERNO DEL CALLBACK     
    console.log(`hola yo soy, ${personaje.name} `)    
    obtenerPersonaje(2, function (personaje) {
        console.log(`hola yo soy, ${personaje.name} `)
        obtenerPersonaje(3, function (personaje) {
            console.log(`hola yo soy, ${personaje.name} `)
            obtenerPersonaje(4, function (personaje) {
                console.log(`hola yo soy, ${personaje.name} `)
                obtenerPersonaje(5, function (personaje) {
                    console.log(`hola yo soy, ${personaje.name} `)
                    obtenerPersonaje(6, function (personaje) {
                        console.log(`hola yo soy, ${personaje.name} `)
                        obtenerPersonaje(7, function (personaje) {
                            console.log(`hola yo soy, ${personaje.name} `)                      })  }) }) })})})
})
```
# Promesas
En esta clase veremos las promesas, que son valores que aun no conocemos. Las promesas tienen tre estados:
pending
fullfilled
rejected
Las promesas se invocan de la siguiente forma:
```
new Promise( ( resolve, reject ) => {
  // --- llamado asíncrono
  if( todoOK ) {
     // -- se ejecutó el llamado exitosamente
     resolve()
  } else {
     // -- hubo un error en el llamado
     reject()
  }
} )
```
```javascript
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, opts, function (data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })    
}
function onError(id) {
    console.log(`sucedio error al obtener el personaje, ${id}`)  
    
}
obtenerPersonaje(1)
    .then(function (personaje) {
        console.log(`el personaje 1 es, ${personaje.name} `)  

    })
    .catch(onError)
```
# Promesas multiples
```javascript
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, opts, function (data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })    
}
function onError(id) {
    console.log(`sucedio error al obtener el personaje, ${id}`)  
    
}
obtenerPersonaje(1)
    .then(personaje1 => {
        console.log(`el personaje 1 es, ${personaje1.name} `)  
        return obtenerPersonaje(2)
    })
    .then(personaje2 => {
        console.log(`el personaje 2 es, ${personaje2.name} `)  
        return obtenerPersonaje(3)        
    })
    .then(personaje3 => {
        console.log(`el personaje 3 es, ${personaje3.name} `)
        return obtenerPersonaje(4)
    })
    .then(personaje4 => {
        console.log(`el personaje 4 es, ${personaje4.name} `)
        return obtenerPersonaje(5)
    })
    .then(personaje5 => {
        console.log(`el personaje 5 es, ${personaje5.name} `)
        return obtenerPersonaje(6)
    })
    .then(personaje6 => {
        console.log(`el personaje 6 es, ${personaje6.name} `)
        return obtenerPersonaje(7)
    })
    .then(personaje7 => {
        console.log(`el personaje 7 es, ${personaje7.name} `)        
    })
    .catch(onError)
```
# tarea asincrona
```javascript
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, opts, function (data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })    
}
function onError(id) {
    console.log(`sucedio error al obtener el personaje, ${id}`)  
    
}
var ids = [1, 2, 3, 4, 5, 6, 7]
// var promesas = ids.map(function(id) {
//     return obtenerPersonaje(id)
// }) @funcion ---->
var promesas = ids.map(id => obtenerPersonaje(id))
Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)


```
## Async-await: lo último en asincronismo:
Async-await es la manera más simple y clara de realizar tareas asíncronas. Await detiene la ejecución del programa hasta que todas las promesas sean resueltas. Para poder utilizar esta forma, hay que colocar async antes de la definición de la función, y encerrar el llamado a Promises.all() dentro de un bloque try … catch.
```javascript
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, opts, function (data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })    
}
function onError(id) {
    console.log(`sucedio error al obtener el personaje, ${id}`)  
    
}
async function obtenerPersonajes() { //  asincronismo 
    var ids = [1, 2, 3, 4, 5, 6, 7]    
    var promesas = ids.map(id => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(promesas) // await : hasta que no esten todos listos 
        console.log(personajes)      
    } catch (id) {
        onError(id)
    }   
}
obtenerPersonajes()
```
## luminando la secuencia de colores
En esta clase se observa la diferencia entre el uso de let y var para la declaración de variables y cómo esta diferencia afecta el alcance de la variable dentro de un ciclo for. Se recomienda siempre el uso de let cuando se trata de estructuras for, ya que al usar var, el valor de dicha variable se va a remplazar cada vez con la última asignación que se haga, mientras que con let, conservará su valor dentro de cada iteración.
Siempre que sea posible debemos usar const sobre let, y let sobre var.
```javascript
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Simon Dice</title>
    <style>
        body {
            margin: 0;
            background: #dedede;
            display: flex;
            align-items: center;
            height: 100vh;
        }

        .gameboard {
            height: 100vh;
            width: 100vh;
            border-radius: 50%;
            overflow: hidden;
            margin: 0 auto;
            max-height: 60vh;
            max-width: 60vh;
        }

        .color {
            width: 50%;
            height: 50%;
            display: inline-block;
        }

        .left {
            float: left;
        }

        .right {
            float: left;
        }

        .celeste {
            background: #22a6b3;
        }

        .celeste.light {
            background: #7ed6df;
        }

        .violeta {
            background: #be2edd;
        }

        .violeta.light {
            background: #e056fd;
        }

        .naranja {
            background: #f0932b;
        }

        .naranja.light {
            background: #ffbe76;
        }

        .verde {
            background: #6ab04c;
        }

        .verde.light {
            background: #badc58;
        }

        .btn-start {
            width: 400px;
            height: 100px;
            background: #ecf0f1;
            color: #2c3e50;
            font-size: 2.5rem;
            position: absolute;
            top: calc(50% - 50px);
            left: calc(50% - 200px);
        }

        .hide {
            display: none;
        }
    </style>
</head>

<body>
    <div class="gameboard">
        <div id="celeste" class="color celeste left" data-color="celeste"></div>
        <div id="violeta" class="color violeta right" data-color="violeta"></div>
        <div id="naranja" class="color naranja left" data-color="naranja"></div>
        <div id="verde" class="color verde right" data-color="verde"></div>
        <button id="btnEmpezar" class="btn-start" onclick="empezarJuego()">Empezar a jugar!</button>
    </div>
    <script>
        const celeste = document.getElementById('celeste')
        const violeta = document.getElementById('violeta')
        const naranja = document.getElementById('naranja')
        const verde = document.getElementById('verde')
        const btnEmpezar = document.getElementById('btnEmpezar')

        class Juego {
            constructor() {
                this.inicializar()
                this.generarSecuencia()
                this.siguienteNivel()
            }

            inicializar() {                
                //                  celeste = celeste  >>> es lo mismo que (celeste,) se asigna la misma variable            
                btnEmpezar.classList.add('hide')
                this.nivel = 4
                this.colores = {
                    celeste,
                    violeta,
                    naranja,
                    verde
                }
            }
            generarSecuencia(){ 
                //Math.random() siempre da un numero entre (0 ~ 1)
                //Math.floot() redondea numero hacia abajo
                this.secuncia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
            }
            siguienteNivel(){
                this.iluminarSecuencia()
            }
            tranformarNumeroAColor(numero){
                switch (numero) {
                    case 0:
                        return 'celeste'                     
                    case 1:
                        return 'vieleta'                     
                    case 2:
                        return 'naranja'                     
                    case 3:
                        return 'verde'                 
                }

            }  //ciclo for. Se recomienda siempre el uso de let cuando se trata de estructuras for, 
                //ya que al usar var, el valor de dicha variable se va a remplazar cada vez con la última
                //asignación que se haga, mientras que con let, conservará su valor dentro de cada iteración.
                //Siempre que sea posible debemos usar const sobre let, y let sobre var.
            iluminarSecuencia(){                
                for (let i = 0; i < this.nivel; i++) {
                    let color = this.tranformarNumeroAColor(this.secuncia[i])
                    setTimeout(() => this.iluminarColor(color), 1000 * i)  
                    console.log(color)     
                    console.log(i)              

                }
            }
            iluminarColor(color){
                this.colores[color].classList.add('light') // añade un nueva etiqueta de css
                setTimeout(() => this.apagarColor(color), 350)
            }
            apagarColor(color){
                this.colores[color].classList.remove('light')// quita un nueva etiqueta de css
            }
        }

        function empezarJuego() {
            // alert('el juego se comienza')
            window.juego = new Juego()
        }
    </script>
</body>
</html>
```
## Obteniendo el input del usuario
Para obtener el input del usuario agregamos un manejador para el evento click del mouse usando addEventListener para cada uno de los colores del juego. Utilizando la propiedad target devuelta por el evento click podemos identificar cuál es el botón que ha sido presionado.
```javascript
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Simon Dice</title>
    <link  href="styles-js-proyecto.css" rel="stylesheet">    
</head>
<body>
    <div class="gameboard">
        <div id="celeste" class="color celeste left" data-color="celeste"></div>
        <div id="violeta" class="color violeta right" data-color="violeta"></div>
        <div id="naranja" class="color naranja left" data-color="naranja"></div>
        <div id="verde" class="color verde right" data-color="verde"></div>
        <button id="btnEmpezar" class="btn-start" onclick="empezarJuego()">Empezar a jugar!</button>
    </div>
    <script>
        const celeste = document.getElementById('celeste')
        const violeta = document.getElementById('violeta')
        const naranja = document.getElementById('naranja')
        const verde = document.getElementById('verde')
        const btnEmpezar = document.getElementById('btnEmpezar')

        class Juego {
            constructor() {
                this.inicializar()
                this.generarSecuencia()
                this.siguienteNivel()
            }

            inicializar() {                
                //                  celeste = celeste  >>> es lo mismo que (celeste,) se asigna la misma variable            
                this.elegirColor = this.elegirColor.bind(this)
                btnEmpezar.classList.add('hide')
                this.nivel = 4
                this.colores = {
                    celeste,
                    violeta,
                    naranja,
                    verde
                }
            }
            generarSecuencia(){ 
                //Math.random() siempre da un numero entre (0 ~ 1)
                //Math.floot() redondea numero hacia abajo
                this.secuncia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
            }
            siguienteNivel(){
                this.iluminarSecuencia()
                this.agregandoEventosClick()
            }
            tranformarNumeroAColor(numero){
                switch (numero) {
                    case 0:
                        return 'celeste'                     
                    case 1:
                        return 'vieleta'                     
                    case 2:
                        return 'naranja'                     
                    case 3:
                        return 'verde'                 
                }

            }  //ciclo for. Se recomienda siempre el uso de let cuando se trata de estructuras for, 
                //ya que al usar var, el valor de dicha variable se va a remplazar cada vez con la última
                //asignación que se haga, mientras que con let, conservará su valor dentro de cada iteración.
                //Siempre que sea posible debemos usar const sobre let, y let sobre var.
            iluminarSecuencia(){                
                for (let i = 0; i < this.nivel; i++) {
                    let color = this.tranformarNumeroAColor(this.secuncia[i])
                    setTimeout(() => this.iluminarColor(color), 1000 * i)  
                    console.log(color)     
                    console.log(i)              

                }
            }
            iluminarColor(color){
                this.colores[color].classList.add('light') // añade un nueva etiqueta de css
                setTimeout(() => this.apagarColor(color), 350)
            }
            apagarColor(color){
                this.colores[color].classList.remove('light')// quita un nueva etiqueta de css
            }
            agregandoEventosClick(){
                this.colores.celeste.addEventListener('click', this.elegirColor)
                this.colores.verde.addEventListener('click', this.elegirColor)
                this.colores.violeta.addEventListener('click', this.elegirColor)
                this.colores.naranja.addEventListener('click', this.elegirColor)
            }
            elegirColor(ev){
                console.log(this)
            }
        }

        function empezarJuego() {
            // alert('el juego se comienza')
            window.juego = new Juego()
        }
    </script>
</body>
</html>
```
## Agregando la verificación del color elegido
Para agregar atributos al objeto principal en el que está nuestro código, basta con usar this, haciendo referencia al contexto de la clase, y agregar los atributos con un punto: this.atributo = valor
La verificación del color elegido la haremos creando y removiendo los eventos del click al pasar el juego a cada nuevo nivel.
```javascript
<body>
    <div class="gameboard">
        <div id="celeste" class="color celeste left" data-color="celeste"></div>
        <div id="violeta" class="color violeta right" data-color="violeta"></div>
        <div id="naranja" class="color naranja left" data-color="naranja"></div>
        <div id="verde" class="color verde right" data-color="verde"></div>
        <button id="btnEmpezar" class="btn-start" onclick="empezarJuego()">Empezar a jugar!</button>
    </div>
    <script>
        const celeste = document.getElementById('celeste')
        const violeta = document.getElementById('violeta')
        const naranja = document.getElementById('naranja')
        const verde = document.getElementById('verde')
        const btnEmpezar = document.getElementById('btnEmpezar')
        const ULTIMO_NIVEL = 10

        class Juego {
            constructor() {                
                this.inicializar()
                this.generarSecuencia()
                setTimeout(this.siguienteNivel(), 600)
                
            }
            inicializar() {                
                //                  celeste = celeste  >>> es lo mismo que (celeste,) se asigna la misma variable            
                this.siguienteNivel = this.siguienteNivel.bind(this)
                this.elegirColor = this.elegirColor.bind(this)
                btnEmpezar.classList.add('hide')
                this.nivel = 1
                this.colores = {
                    celeste,
                    violeta,
                    naranja,
                    verde
                }
            }
            generarSecuencia(){ 
                //Math.random() siempre da un numero entre (0 ~ 1)
                //Math.floot() redondea numero hacia abajo
                this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
            }
            siguienteNivel() { 
        //    this.nombreAtributo = 'VALOR' >>> AGREGAR ATRIBUTOS AL OBJETO
                this.subnivel = 0
                this.iluminarSecuencia()
                this.agregandoEventosClick()
            }
            tranformarNumeroAColor(numero){
                switch (numero) {
                    case 0:
                        return 'celeste'                     
                    case 1:
                        return 'vieleta'                     
                    case 2:
                        return 'naranja'                     
                    case 3:
                        return 'verde'                 
                }
            }
            tranformarColorANumero(color){
                switch (color) {
                    case 'celeste':
                        return 0                    
                    case 'vieleta':
                        return 1                     
                    case 'naranja' :
                        return 2                    
                    case 'verde' :
                        return 3                
                }
            }          
              
            iluminarSecuencia(){                
                for (let i = 0; i < this.nivel; i++) {
                    let color = this.tranformarNumeroAColor(this.secuencia[i])
                    setTimeout(() => this.iluminarColor(color), 1000 * i)  
                    console.log(color)     
                    console.log(i)              

                }
            }
            iluminarColor(color){
                this.colores[color].classList.add('light') // añade un nueva etiqueta de css
                setTimeout(() => this.apagarColor(color), 350)
            }
            apagarColor(color){
                this.colores[color].classList.remove('light')// quita un nueva etiqueta de css
            }
            agregandoEventosClick(){
                this.colores.celeste.addEventListener('click', this.elegirColor)
                this.colores.verde.addEventListener('click', this.elegirColor)
                this.colores.violeta.addEventListener('click', this.elegirColor)
                this.colores.naranja.addEventListener('click', this.elegirColor)
            }
            eliminarEventosClick(){
                this.colores.celeste.removeEventListener('click', this.elegirColor)
                this.colores.verde.removeEventListener('click', this.elegirColor)
                this.colores.violeta.removeEventListener('click', this.elegirColor)
                this.colores.naranja.removeEventListener('click', this.elegirColor)
            }
            elegirColor(ev){                
                console.log(this)
                const nombreColor = ev.target.dataset.color
                const numeroColor = this.tranformarColorANumero(nombreColor)
                this.iluminarColor(nombreColor)
                if (numeroColor === this.secuencia[this.subnivel]) {
                    this.subnivel++
                    if (this.subnivel === this.nivel) {
                        this.nivel++
                        this.eliminarEventosClick()
                        if (this.nivel === (ULTIMO_NIVEL + 1)) {
                            // gano
                        }else {
                            setTimeout(this.siguienteNivel, 1500)                            
                        }
                    }
                } else {
                    // perdio
                }
            }
        }
        function empezarJuego() {
            // alert('el juego se comienza')
            window.juego = new Juego()
        }
    </script>
</body>
```
## Agregando los estados finales del juego
https://sweetalert.js.org/guides/  Incluiremos una librería de mensajes con estilos mucho más agradables que el mensaje básico de javascript para mostrar los estados finales del juego al usuario.
```javascript
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> <!-- libreria CDN PARA LOS MENSAJES -->
    <script>
        const celeste = document.getElementById('celeste')
        const violeta = document.getElementById('violeta')
        const naranja = document.getElementById('naranja')
        const verde = document.getElementById('verde')
        const btnEmpezar = document.getElementById('btnEmpezar')
        const ULTIMO_NIVEL = 1    

        class Juego {
            constructor() {  
                this.inicializar = this.inicializar.bind(this)              
                this.inicializar()
                this.generarSecuencia()
                setTimeout(this.siguienteNivel(), 600)
                
            }
            inicializar() {                
                //                  celeste = celeste  >>> es lo mismo que (celeste,) se asigna la misma variable            
                this.siguienteNivel = this.siguienteNivel.bind(this)
                this.elegirColor = this.elegirColor.bind(this)
                this.toggleBtnEmpezar()
                
                this.nivel = 1
                this.colores = {
                    celeste,
                    violeta,
                    naranja,
                    verde
                }
            }
            toggleBtnEmpezar(){
                if (btnEmpezar.classList.contains('hide')) {
                    btnEmpezar.classList.remove('hide')
                }else{
                    btnEmpezar.classList.add('hide')
                }
                

            }
            generarSecuencia(){ 
                //Math.random() siempre da un numero entre (0 ~ 1)
                //Math.floot() redondea numero hacia abajo
                this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
            }
            siguienteNivel() { 
        //    this.nombreAtributo = 'VALOR' >>> AGREGAR ATRIBUTOS AL OBJETO
                this.subnivel = 0
                this.iluminarSecuencia()
                this.agregandoEventosClick()
            }
            tranformarNumeroAColor(numero){
                switch (numero) {
                    case 0:
                        return 'celeste'                     
                    case 1:
                        return 'vieleta'                     
                    case 2:
                        return 'naranja'                     
                    case 3:
                        return 'verde'                 
                }
            }
            tranformarColorANumero(color){
                switch (color) {
                    case 'celeste':
                        return 0                    
                    case 'vieleta':
                        return 1                     
                    case 'naranja' :
                        return 2                    
                    case 'verde' :
                        return 3                
                }
            }
            
                //ciclo for. Se recomienda siempre el uso de let cuando se trata de estructuras for, 
                //ya que al usar var, el valor de dicha variable se va a remplazar cada vez con la última
                //asignación que se haga, mientras que con let, conservará su valor dentro de cada iteración.
                //Siempre que sea posible debemos usar const sobre let, y let sobre var.
            iluminarSecuencia(){                
                for (let i = 0; i < this.nivel; i++) {
                    let color = this.tranformarNumeroAColor(this.secuencia[i])
                    setTimeout(() => this.iluminarColor(color), 1000 * i)  
                    console.log(color)     
                    console.log(i)              

                }
            }
            iluminarColor(color){
                this.colores[color].classList.add('light') // añade un nueva etiqueta de css
                setTimeout(() => this.apagarColor(color), 350)
            }
            apagarColor(color){
                this.colores[color].classList.remove('light')// quita un nueva etiqueta de css
            }
            agregandoEventosClick(){
                this.colores.celeste.addEventListener('click', this.elegirColor)
                this.colores.verde.addEventListener('click', this.elegirColor)
                this.colores.violeta.addEventListener('click', this.elegirColor)
                this.colores.naranja.addEventListener('click', this.elegirColor)
            }
            eliminarEventosClick(){
                this.colores.celeste.removeEventListener('click', this.elegirColor)
                this.colores.verde.removeEventListener('click', this.elegirColor)
                this.colores.violeta.removeEventListener('click', this.elegirColor)
                this.colores.naranja.removeEventListener('click', this.elegirColor)
            }
            elegirColor(ev){                
                console.log(this)
                const nombreColor = ev.target.dataset.color
                const numeroColor = this.tranformarColorANumero(nombreColor)
                this.iluminarColor(nombreColor)
                if (numeroColor === this.secuencia[this.subnivel]) {
                    this.subnivel++
                    if (this.subnivel === this.nivel) {
                        this.nivel++
                        this.eliminarEventosClick()
                        if (this.nivel === (ULTIMO_NIVEL + 1)) {
                            this.ganoElJuego()
                        }else {
                            setTimeout(this.siguienteNivel, 1500)                            
                        }
                    }
                } else {
                    this.perdioElJuego()
                }
            }
            ganoElJuego(){
                swal('Platzi', 'felicitaciones, ganaste el juego!', 'success')
                .then(this.inicializar)
            }
            perdioElJuego(){
                swal('Platzi', 'Sorry has perdido tio :(', 'error')
                    .then(() => {
                        this.eliminarEventosClick()
                        this.inicializar()
                    })

            }
        }
        function empezarJuego() {
            // alert('el juego se comienza')
            window.juego = new Juego()
        }
    </script>
```
## var, let y const: las diferencias entre ellos
““var”” es la manera más antigua de declarar variables. No es muy estricta en cuanto al alcance, ya que al declarar variables de esta forma, dichas variables podrán ser accedidas, e incluso modificaddas, tanto dentro como fuera de los bloques internos en una función.

Con ““let”” por otra parte, el alcance se reduce al bloque (las llaves) en el cual la variable fue declarada. Fuera de este bloque la variable no existe. Una vez declarada la variable con let, no se puede volver a declarar con en ninguna otra parte de la función.

““const”” al igual que ““let”” se define en el contexto o alcance de un bloque, a diferencia de let y var, las varibles definidas como constantes (const), ya no podrán ser modificadas ni declaradas nuevamente, en ninguna otra parte de la función o el contexto en el que ya existen.

La recomendación es reducir siempre al mínimo el alcance de nuestras variables, por lo que se debe usar let en lugar de var mientras sea posible.
```javascript
<script>
            var sacha = {
                    nombre: 'sacha',
                    apellido: 'hernandez',
                    edad: 28
            }            
            function esMayorDeEdad(persona) {
                 let mensaje, mensaje2
                if (persona.edad >= 18) {
                    mensaje = 'es mayor de edad'
                }else{
                    mensaje = 'es menor de edad'
                    // mensaje2 = 'es otro mensaje'
                }
                console.log(mensaje)
                // Console.log(mensaje2)
            }
            esMayorDeEdad(sacha)
            for (let i = 0; i < 10; i++) {
                console.log(i)                
            }
                console.log(`termino el form'${i}`)
</script>
```
¿Hace cuántos días naciste?
Con variables de tipo Date, se pueden realizar operaciones de suma y resta similares a las que se realizan con números. El resultado que se obtiene está en milisegundos, por lo que luego hay que hacer algunas operaciones adicionales para llevarlos a días, meses o años según queramos. También aplica para Horas, Minutos, Segundos y Milisegundos.
```javascript
<body>
        <script>
        function diasFechas(fecha1, fecha2) {
            const unDia_milis = 1000 * 60 * 60 *24
            const diferencia = Math.abs(fecha1 - fecha2) // devuleve el valor absoluta
            return Math.floor(diferencia / unDia_milis) // redondear hacia abajo
        }
        const hoy = new Date()  
        const nacimiento = new Date(1981, 02, 12)
        </script> 
    
    </body>
```
## Funciones recursivas
La recursividad es un concepto muy importante en cualquier lenguaje de programación. Una función recursiva es básicamente aquella que se llama (o se ejecuta) a sí misma de forma controlada, hasta que sucede una condición base.
```javascript
<script>
            // division entera
            // 13 /_4__

            // 13 - 4 = 9   1
            //  9 - 4 = 5   1
            //  5 - 4 = 1   1  la division entera es 3  ( 1 1 1)
            //  1 - 4 = -3    
            function divisionEntera(dividendo, divisor) {
                if (dividendo < divisor) {
                    return 0
                }
                return 1 + divisionEntera(dividendo - divisor, divisor)
            }       
</script> 
```
## Memoización: ahorrando cómputo
La memoización es una técnica de programación que nos permite ahorrar cómputo o procesamiento en JavaScript, al ir almacenando el resultado invariable de una función para que no sea necesario volver a ejecutar todas las instrucciones de nuevo, cuando se vuelva a llamar con los mismos parámetros. Es similar a usar memoria cache.
```javascript
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>clase 39</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
       
    </head>
    <body>
        <script>             
            // !6 = 6 * 5 * 4 * 3 * 2 * 1   = 720
            // !16 = 16 * 15 * 14 ....... 3 * 2 * 1 
            // !16 = 16 * 15 * 14 ...*!6    
            function factorial(n) {
                if (!this.cache) {
                    this.cache = {}                    
                }
                debugger
                if (this.cache[n]) {
                    return this.cache[n]
                }

                if (n === 1) {
                    return 1
                }
                this.cache[n] = n * factorial(n - 1)
                // return n * factorial(n - 1)
                debugger
                return this.cache[n]
            }    
        </script> 
    
    </body>
</html>
```
## Entiende los closures de JavaScript
Un closure, básicamente, es una función que recuerda el estado de las variables al momento de ser invocada, y conserva este estado a través de reiteradas ejecuciones. Un aspecto fundamental de los closures es que son funciones que retornan otras funciones.
```javascript
 <script>
        function crearSaludo(finalDeFrace) {
            return function(nombre){
                console.log(`HOLA ${nombre} ${finalDeFrace}`)
            }
        }             
        const saludoArgentino = crearSaludo('che')
        const saludoMexico = crearSaludo('guey')
        const saludoColombia = crearSaludo('vecino')
        saludoArgentino('ruber')
        saludoMexico('ruber')
        saludoColombia('ruber')

        </script> 
```
## Estructuras de datos inmutables
Las estructuras de datos inmutables forman parte de los principios de la Programación Funcional y nos permiten evitar tener efectos colaterales en los datos. En otras palabras, que hayan modificaciones en las variables sin nuestro consentimiento, produciendo comportamientos inesperados en el programa.
```javascript
<script>
        const sacha = {
            nombre: 'ruber',
            apellido: 'hernandez',
            edad: 28
            }
        // const cumpleaños = persona => persona.edad++ //  >>>> esto incrementa al objeto edad de la persona y no queremos eso
        const cumpleañosInmutable = persona => ({
            ...persona,
            edad: persona.edad + 1
        })
        </script> 
```
## Cambiando de contexto al llamar a una función
El contexto (o alcance) de una función es por lo general, window. Así que en ciertos casos, cuando intentamos referirnos a this en alguna parte del código, es posible que tengamos un comportamiento inesperado, porque el contexto quizás no sea el que esperamos.
```javascript
<script>
        const ruber = {
            nombre: 'ruber',
            apellido: 'hernandez'            
            }
        const yeni = {
                nombre: 'yenifer',
                apellido: 'hynollazha'
            }
        function saludar(saludo = 'Hola') {
            console.log(`${saludo}, mi nombre es ${this.nombre}`)
        }
        // const saludarRuber = saludar.bind(ruber)
        // const saludaryeni = saludar.bind(yeni)

        // setTimeout(saludar.bind(ruber, 'hola che'), 1000);
        // saludar.call(ruber, 'hola parce')
        saludar.apply(ruber, ['hola che'])
        </script> 
```
## Cuándo hace falta poner el punto y coma al final de la línea
El punto y coma es opcional en JavaScript, excepto en algunos casos:
Cuando usamos varias instrucciones en una mísma línea
Al comenzar la próxima línea con un array
Al comenzar la próxima línea con un template string
```javascript
```
```javascript
```
```javascript
```