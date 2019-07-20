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

