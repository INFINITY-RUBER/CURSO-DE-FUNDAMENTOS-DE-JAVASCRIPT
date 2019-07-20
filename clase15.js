var contador = 0
const llueve = () => Math.random() < 0.25

do {

    contador ++

} while (!llueve());

console.log(`FUI A VER SI LLOVIA ${contador} ${contador > 1 ? 'VECES':'VEZ'}`)