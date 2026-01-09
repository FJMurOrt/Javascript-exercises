//PRIMERO, IMPORTAMOS LOS MODULOS QUE NECESITAMOS. EL DE HTTP Y EL DE URL.
var http = require("http");
var url = require("url");

var mostrar_hello_world = (peticion, resultado) => {
    var url_pagina = url.parse(peticion.url);

    //OBTENEMOS LA URL COMPLETA (SIN MOSTRAR EL DOMINIO NI EL PUERTO).
    console.log("Camino completo del recurso y parámetros: "+peticion.url);

    //OBTENEMOS SOLO LA RUTA Y NOMBRE DEL ARCHIVO (SIN LOS PARÁMETROS).
    console.log("Sólo el camino y nombre del rescurso: "+url_pagina.pathname);

    //AHORA SÓLO LOS PARÁMETROS DEL RECURSO
    console.log("Parámetros del recurso: "+ url_pagina.query);

    //SE VERIFICAMOS EL ESTADO DE LA RESPUESTA EN 200
    resultado.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    
    //ESCRIBIMOS LO QUE QUEREMOS QUE SE ENVIE
    resultado.write("Hola Mundo");
    
    //FINALIZAMOS
    resultado.end();
}

var servidor = http.createServer(mostrar_hello_world);
servidor.listen(8080);