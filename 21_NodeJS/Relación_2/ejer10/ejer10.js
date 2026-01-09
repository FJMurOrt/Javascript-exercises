//IMPORTAMOS LOS MÓDULOS
var http = require("http");
var mysql = require("mysql");

//ESTABLECEMOS LA CONEXIÓN
var conexion = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "node_ejer9"
    }
);

//CREAMOS LA CONSULTA QUE VAMOS A NECESITAR
var consulta_sql = "SELECT name FROM category";

//CREAMOS LA FUNCIÓN AL SERVIDOR DONDE VAMOS A METER LA CONSULTA PORQUE ESTA VEZ VAMOS A MOSTRAR LOS RESULTADOS EN LA PÁGINA DEL NAVEGADOR
var mostrar_resultados = function(peticion, resultado){
    //DEFINIMOS EL TIPO DE CONTENIDO QUE SERÁ HTML Y EL ESTADO QUE SERÍA 200
    resultado.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});

    conexion.query(consulta_sql, function(error_consulta, resultados_registros){
        if(error_consulta){
            resultado.end("Hubo un problema al intentar realizar la consulta en la base de datos.");
            conexion.end();
            return;
        }
        if(resultados_registros.length > 0){
            resultado.write("<html>");
            resultado.write("<body>");
            resultado.write("<table border = '1' style='margin: 0 auto; text-align: center;'>");
            resultado.write("<tr>");
            resultado.write("<td><b>Resultado de registros</b></td>");
            resultado.write("</tr>");
            for(var i in resultados_registros){
                resultado.write("<tr><td>"+resultados_registros[i].name+"</td></tr>");
            }
            resultado.write("</table>");
            resultado.write("</body>");
            resultado.write("</html>");
        }else{
            resultado.write("No se recibieron datos.");
        }
        conexion.end();
        resultado.end();
    });
}


//CREAMOS EL SERVIDOR
var servidor = http.createServer(mostrar_resultados);

//DEINIMOS EL PUERTO
servidor.listen(8080);
