<?php
//DEFINIMOS LAS VARIABLES QUE NECESITAMOS
$contenido_a_devolver = "";

//PARA GUARDAR EL VOTO EN EL ARCHIVO. SI HEMOS RECIBIDO EL VALOR DE ENLACE, ES DECIR, SI EXITE. LO GUARDAMOS.
if(isset($_GET["enlace"])){
    $enlace = $_GET["enlace"];
    $archivo = fopen("votos.txt", "a");
    fwrite($archivo,$enlace."\n");
    fclose($archivo);
}
//PARA MOSTRAR EL CONTENIDO DEL ARCHIVO, ES DECIR, LA LISTA DE VOTOS REALIZADOS.
//COMPROBAMOS ANTES QUE TENGA UN TAMAÑO DE CONTENIDO. QUE NO ESTÉ VACÍO.
if(file_exists("votos.txt")){
    $lectura = fopen("votos.txt", "r");
    while(!feof($lectura)){
        $linea = fgets($lectura);
        if($linea){
            $contenido_a_devolver .= $linea."<br>";
        }
    }
    echo $contenido_a_devolver;
    fclose($lectura);
}
?>