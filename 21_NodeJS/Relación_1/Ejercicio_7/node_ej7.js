//IMPORTAMOS LOS MODULOS QUE NECESITAMOS PARA ESTE EJERCICIO
var http = require("http"); //PARA PODER CREAR EL SERVIDOR
var url = require("url"); //PARA PODER ACCEDER A LA URL
var leer = require("fs"); //PARA ACCEDER A ARCHIVOS Y LEERLOS

//CREAMOS LA FUNCIÓN QUE LUEGO LE PASAREMOS CUANDO CREEEMOS EL SERVIDOR
var mostrar_paginas = function(peticion, resultado){
    //CREAMOS UNA VARIBALE QUE SERÁ LA QUE USEMOS PARA PASARLE COMO PARAMETRO DE ARCHIVO A LA FUNCIÓN DE LEER ARCHIVO MÁS TARDE
    var archivo_a_leer;

    //AHORA, DEPENDIENDO DE LO QUE SALGA EN LA URL, LA VARIBALE ARCHIVO_A_LEER TIENE UN VALOR U OTRO
    if(peticion.url === "/"){
        archivo_a_leer = "index.html";
    }
    if(peticion.url === "/pagina1.html"){
        archivo_a_leer = "pagina1.html";
    }
    if(peticion.url === "/pagina2.html"){
        archivo_a_leer = "pagina2.html";
    }
    if(peticion.url === "/index.html"){
        archivo_a_leer = "index.html";
    }
    if(!archivo_a_leer){
        //SI LO QUE SALE EN LA RUTA NO SE PUEDE ENCONTRAR O DA ALGUN TIPO DE ERROR
        resultado.writeHead(404, {"Content-Type": "text/html; charset=utf-8"});
        resultado.end("<h1 style='color:red;'>No se pudo encontrar la página.</h1>");
    }



    //AHORA LO QUE HACEMOS ES LEER EL ARCHIVO CORRESPONDIENTE AL NOMBRE QUE HAYAMOS GUARDADO EN LA VARIABLE ARCHVO_A_LEER
    leer.readFile(archivo_a_leer, function(error_al_leer, contenido_archivo){
        if(error_al_leer){
            resultado.writeHead(404, {"Content-Type": "text/html; charset=utf-8"});
            resultado.end("<h1 style='color: red;'>No se pudo encontrar la página.</h1>");
        }else{
            resultado.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
            resultado.end(contenido_archivo);
        }
    });
}

//CREAMOS EL SERVIDOR Y LE PASAMOS LA FUNCIÓN
var servidor = http.createServer(mostrar_paginas);

//Y DEFINIMOS EL PUERTO
servidor.listen(8080);