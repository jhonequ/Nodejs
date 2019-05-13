/* Cuando se le da un valor por default
const opciones = {
    matematicas: {
        default: 0,
        alias: 'm'
    },
    ingles: {
        default: 0,
        alias: 'i'
    },
    programacion: {
        default: 0,
        alias: 'p'
    }
}*/

//Poniendo que los campos son obligatorios
const opciones = {
    matematicas: {
        demand: true,
        alias: 'm'
    },
    ingles: {
        default: 0,
        alias: 'i'
    },
    programacion: {
        default: 0,
        alias: 'p'
    }
}

const argv = require('yargs')
    .command('Promedio', 'Calcular el promedio', opciones)
    .argv

console.log(argv.matematicas);
console.log('El nombre del estudiante es ' + argv.nombre);
console.log(argv);
console.log('El promedio es ' + (argv.m + argv.i + argv.p) / 3);