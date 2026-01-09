//FUNCIÓN PARA SUMAR.
function sumar(num1, num2){
    return num1 + num2;
}

//FUNCIÓN PARA RESTAR
function restar(num1, num2){
    return num1 - num2;
}

//FUNCIÓN PARA DIVIDIR
function dividir(num1, num2){
    return num1 / num2;
}

//PARA OBTENER EL NÚMERO PI
let num_pi = Math.PI;

//AHORA EXPORTAMOS LAS FUNCIONES PARA QUE PODAMOS UTILIZARLA EN EL OTRO ARCHIVO.
exports.sumar = sumar;
exports.restar = restar;
exports.dividir = dividir;
exports.num_pi = num_pi;
