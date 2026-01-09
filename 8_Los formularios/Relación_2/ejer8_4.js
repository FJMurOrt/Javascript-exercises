
//AGREGAMOS EL EVENTO AL BOTÓN REGISTRAR

let formulario_registro = document.getElementById("formulario_registro");
formulario_registro.addEventListener("submit", function(event){
//EVITAMOS QUE EL EVENTO DEL SUBMIT ENVIE EL FORMULARIO SIN VALIDAR ANTES
event.preventDefault();

//VALIDACIÓN PARA QUE EL CAMPO DE NOMBRE NO PUEDA ESTAR VACÍO
let nombre = document.getElementById("nombre");
let campo_nombre = nombre.value;

if(campo_nombre == ""){
    alert("El campo nombre es obligatorio");
    return;
}

//VALIDACIÓN PARA QUE EL CAMPO APELLIDOS NO PUEDA ESTAR VACÍO
let apellido = document.getElementById("apellidos");
let campo_apellidos = apellido.value;

if(campo_apellidos == ""){
    alert("El campo apellidos es obligatorio");
    return;
}

//VALIDACIÓN PARA QUE EL CAMPO EMAIL NO PUEDA ESTAR VACÍO
let email = document.getElementById("email");
let campo_email = email.value;

if(campo_email == ""){
    alert("El campo email es obligatorio");
    return;
}

//VALIDACIÓN PARA QUE EL CAMPO NOMBRE DE USUARIO NO PUEDA ESTAR VACÍO
let nombre_usuario = document.getElementById("usuario");
let campo_nombre_usuario = nombre_usuario.value;

if(campo_nombre_usuario == ""){
    alert("El campo nombre de usuario es obligatorio");
    return;
}

//VALIDACIÓN PARA QUE EL CAMPO CLAVE DE USUARIO NO PUEDA ESTAR VACÍO
let clave_usuario = document.getElementById("clave");
let campo_clave_usuario = clave_usuario.value;

if(campo_clave_usuario == ""){
    alert("El campo clave de usuario es obligatorio");
    return;
}

//VALIDACIÓN PARA QUE EL CAMPO CLAVE DE USUARIO NO PUEDA ESTAR VACÍO
let vuelve_clave = document.getElementById("vuelve_clave");
let campo_vuelve_clave = vuelve_clave.value;

if(campo_vuelve_clave == ""){
    alert("El campo de volver a introducir la clave de usuario es obligatorio");
    return;
}

//VALIDACIÓN DEL EMAIL
//QUE NO EMPIECE POR @
if(campo_email.charAt(0) == "@"){
    alert("El email no puede empezar con @");
    return;
}

//QUE CONTENGA ALMENOS UNA @ EN EL EMAIL.

let longitud_email = campo_email.length;
let si_tiene_arroba = false;

for(i = 1; i < longitud_email; i++){
    if(campo_email.charAt(i) === "@"){
        si_tiene_arroba = true;
        break;
    }
}
if(si_tiene_arroba == false){
    alert("Tu email debe contener almenos una @");
}

//VALIDACIÓN PARA QUE UNA DE LAS OPCIONES DEL SEXO ESTE SELECCIONADA.

let hombre = document.getElementById("hombre");
let mujer = document.getElementById("mujer");

if(!hombre.checked && !mujer.checked){
    alert("Debes seleccionar un sexo");
    return;
}

//VALIDACIÓN PARA LA EDAD

let edad = document.getElementById("edad");
let campo_edad = parseInt(edad.value);

if(isNaN(campo_edad)){
    alert("Debes introducir un número en el campo edad");
    return;
}

//VALIDACIÓN DE LA PÁGINA WEB PARA QUE EMPIECE POR HTTP://

let pagina_web = document.getElementById("web");
let campo_web = pagina_web.value.toLowerCase();

if(campo_web.substring(0,7) !== "http://"){
    alert("La página web introducida debe comenzar con 'http://'");
    return;
}

//VALIDACIÓN DE LA FECHA

let dia = parseInt(document.getElementById("dia_nac").value);

let meses = document.getElementById("mes_nac");
let mes = meses.value.toLowerCase();

let anio = parseInt(document.getElementById("anio_nac").value);

const meses_31 =  new Array("enero","marzo","mayo","julio","agosto","octubre","diciembre");
const meses_30 = new Array("abril","junio","septiembre","noviembre");

if(!isNaN(dia) && (mes == "" || isNaN(anio))){
    alert("Si introduces el día de nacimiento, debe introducir el mes y el año también");
    return;
}
if(mes !== "" && (isNaN(dia) || isNaN(anio))){
    alert("Si introduces el mes de nacimiento, debe introducir el día y el año también");
    return;
}
if(!isNaN(anio) && (mes == "" || isNaN(dia))){
    alert("Si introduces el año de nacimiento, debe introducir el mes y el día también");
    return;
}

if(dia < 1 || dia > 31){
    alert("El día introducido no es válido");
    return;
}

for(let i = 0; i < meses_30.length; i++){
    if(dia == 31 && mes == meses_30[i]){
        alert("El día no es válido para el mes elegido");
        return;
    }   
}

if(anio <= 1900 || anio > 2025){
    alert("El año introducido no es válido");
    return;
}
});

//AGREGAMOS EL EVENTO AL BOTÓN BORRAR DATOS
let boton_borrar_datos = document.getElementById("borrar");
let formulario = document.getElementById("formulario_registro");

boton_borrar_datos.addEventListener("click", function(){
//FUNCIÓN PARA BORRAR LOS CAMPOS DEL FORMULARIO
formulario.reset();
});