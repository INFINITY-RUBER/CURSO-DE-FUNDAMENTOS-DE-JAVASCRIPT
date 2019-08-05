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

