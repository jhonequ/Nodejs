let Estudiante = {
    nombre: 'Juan',
    edad: 25,
    notas: {
        matematicas: 3,
        ingles: 4,
        programacion: 5
    }
};
let obtenerpromedio = (nota_uno, nota_dos, nota_tres) => (nota_uno + nota_dos + nota_tres) / 3;

module.exports = {
    Estudiante,
    obtenerpromedio
};