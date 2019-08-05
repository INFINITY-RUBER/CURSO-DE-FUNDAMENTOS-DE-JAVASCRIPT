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

