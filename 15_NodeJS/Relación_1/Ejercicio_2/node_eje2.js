//VAMOS A IMPORTAR EL MÓDULO OS, QUE ES UN MÓDULO INTERNO RELACIONADO CON EL SISTEMA OPERATIVO.
const modulo_os = require("os");

//AHORA MOSTRAMOS INFORMACIÓN USNAOD EL MODULO.
console.log("Sistema operativo: "+modulo_os.platform());
console.log("Versión del sistema operativo: "+modulo_os.release());
console.log("Memoria total: "+modulo_os.totalmem());
console.log("Memoria libre: "+modulo_os.freemem());
