
// IMPORTAR la función ...
//const saludos = require('./saludos.js')
const {
    saludar,                        // SALUDO #01
    saludarHolaMundo                // SALUDO #02
} = require('./saludos.js')


console.log(saludar('mi amigo TEST'));
console.log(saludarHolaMundo());
//console.log(saludos.saludar('mi Amigo!!!'));