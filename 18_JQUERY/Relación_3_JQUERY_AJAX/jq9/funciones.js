$(document).ready(function(){
    $("#enviar").click(function(){
        //ACCEDEMOS AL CAMPO DEL NÚMERO DEL COCHE
        let num_coche = $("#num_coche").val();

        if(isNaN(num_coche) || num_coche < 1 || num_coche > 3){
            alert("El número introducido sólo puede ser 1, 2 o 3. El campo tampoco puede quedar vacío.");
            return;
        }

        $.getJSON("coches.php", {coche: num_coche}, function(respuesta){
            $("#resultado").html(
                "Marca"+ respuesta.marca+"<br>" +
                "Modelo"+ respuesta.modelo+"<br>"+
                "Matricula"+ respuesta.matricula+"<br>"
            );
        });
         $("#num_coche").val("");
    });
});