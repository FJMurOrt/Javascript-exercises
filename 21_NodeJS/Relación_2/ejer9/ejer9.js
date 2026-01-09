//IMPORTAMOS LOS MÓDULOS QUE VAMOS A NECESITAR
var http = require("http"); //PARA CREAR EL SERVIDOR
var mysql = require("mysql"); //PARA ACCEDER A LA BASE DE DATOS

//DEFINIMOS LA CONEXIÓN A LA BASE DE DATOS
var conexion = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "node_ejer9"
    }
);

//DEFINIMOS LA CONSULTA QUE VAMOS A USAR
var consulta_sql = "SELECT name FROM category";

//EJECUTAMOS LA CONSULTA Y MOSTRAMOS
conexion.query(consulta_sql, function consulta(error_en_la_consulta, resultados){
    if(error_en_la_consulta){
        console.log(error_en_la_consulta);
        conexion.end();
        return;
    }
    if(resultados.length > 0){
        for(var i in resultados){
            console.log("Result: "+resultados[i].name);
        }
    }else{
        console.log("No se recibieron datos");
    }
    conexion.end();
});

//CREAMOS LA FUNCIONA PARA LANZAR UN MENSAJE AL USUARIO QUE ENTRE AL SERVIDOR
var mensaje_para_el_usuario = function(peticion, resultado){
    resultado.writeHead(200);
    resultado.end("Servidor funcionando. Los datos consultados de la base de datos se ven por la consola.");
}

//VARIABLE DONDE GUARDAMOS EL SERVIDOR CREADO
var servidor = http.createServer(mensaje_para_el_usuario);

//DEFINIMOS EL PUERTO DEL SERVIDOR
servidor.listen(8080);