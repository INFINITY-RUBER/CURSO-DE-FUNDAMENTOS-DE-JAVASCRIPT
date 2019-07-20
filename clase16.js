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
    case 'Cáncer':
    case 'cancer':
        console.log('(Junio 21 – Julio 22)')
        break;
    case 'Leo':
    case 'leo':
        console.log('(Julio 23–Agosto 22)')
        break;
    case 'Virgo':
    case 'virgo':
        console.log('(Agosto 23 – Septiembre 22)')
        break;
    case 'Libra':
    case 'libra':
        console.log('(Septiembre 23 – Octubre 22)')
        break;
    case 'Escorpio':
    case 'escorpio':
        console.log('(Octubre 23 – Noviembre 21)')
        break;          
    default:
        console.log('no esta en mi base de datos')            
        break;
}
