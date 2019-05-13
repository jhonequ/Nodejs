const { Estudiante, obtenerpromedio } = require('./Calculos');
const fs = require('fs');

console.log('El nombre del estudiante es ' + Estudiante.nombre);
console.log('El promedio del estudiante es ' + obtenerpromedio(Estudiante.notas.matematicas, Estudiante.notas.ingles, Estudiante.notas.programacion));

let { nombre, edad: anos, notas: { matematicas, ingles, programacion } } = Estudiante;

console.log('El nombre del estudiante es ' + nombre);
console.log('El promedio del estudiante es ' + obtenerpromedio(matematicas, ingles, programacion));
console.log('La edad del estudiante es ' + anos);

let crearArchivo = (Estudiante) => {
    texto = 'El nombre del estudiante es ' + Estudiante.nombre + '\n' +
        'ha obtenido un promedio de ' + obtenerpromedio(matematicas, ingles, programacion);
    fs.writeFile('promedio.txt', texto, (err) => {
        if (err) throw (err);
        console.log('se ha creado el archivo')
    });
}

crearArchivo(Estudiante);