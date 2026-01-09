//IMPORTAMOS LOS MÓDULOS QUE NECESITAMOS
var http = require("http"); //PARA PODER CREAR EL SERVIDOR
var leer = require("fs"); //FS ES EL MÓDULO PARA ACCEDER A ARCHIVOS, COMO POR EJEMPLO, PARA PODER LEERLOS.

var mostrar_contenido_pagina = function(peticion,resultado){
    leer.readFile("index.html", function(error_al_leer, contenido_archivo){
        if(error_al_leer){//SI HAY ALGUN ERROR AL LEER EL ARHCIVO PUES MOSTRAMOS UN MENSAJE EN LA PÁGINA DEL NAVEGADORCON EL RESULTADO.END
            resultado.writeHead(404, {"Content-Type": "text/html; charset=utf-8"});
            resultado.end("<h1 style='color: red'>Error al abrir el archivo solicitado.</h1>");
        }else{//SI NO HAY ERROR, PUES EL RESULTADO.END MUESTRA EL CONTENIDO DEL ARCHIVO.
            resultado.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
            resultado.end(contenido_archivo);
        }
    });
}

var servidor = http.createServer(mostrar_contenido_pagina); //CREAMOS EL SERVIDOR QUE EJECUTARÁ LA FUNCIÓN DE LEER EL ARCHIVO

servidor.listen(8080);