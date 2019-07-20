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

