
// SALUDO #01
function saludar(name) {
  // Se utiliza el ```` para lectura de parametros (no son comillas)
  return `Hola, ${name}`;
}


// SALUDO #02
function saludarHolaMundo() {
  return `Hola Mundo!!!!`;
}


// EXPORTAR la función ...
module.exports = {
  saludar: saludar,
  saludarHolaMundo: saludarHolaMundo,
};
