//IMPORTAMOS EL MÓDULO QUE VA A SER EL ARCHIVO QUE HEMOS CREADO DE MATEMATICA.JS Y LO GUARDAMOS EN UNA VARIABLE
const modulo_operaciones_matematicas = require("./matematica");

//EJECUTAMOS LA FUNCIONES Y LAS VEMOS EN LA CONSOLA
console.log("La suma de 2+2 es = "+modulo_operaciones_matematicas.sumar(2,2));
console.log("La resta de 4-1 = "+modulo_operaciones_matematicas.restar(4,1));
console.log("La división de 6/3 = "+modulo_operaciones_matematicas.dividir(6,3));
console.log("El número PI es = "+modulo_operaciones_matematicas.num_pi);
