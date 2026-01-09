<?php
$enlace = $_GET["enlace"];
$contenido = "";

if($enlace == 1){
    $archivo = "tutorial1.htm";
}
if($enlace == 2){
    $archivo = "tutorial2.htm";
}

//AHORA ABRIMOS EL ARCHIVO, LEEMOS EL CONTENIDO Y SE LO PASAMOS AL HTML DE AJAX

if(file_exists($archivo)){
    $contenido = file_get_contents($archivo);
    echo $contenido;
}else{
    echo "No se pudo abrir el archivo porque no se encontró.";
}
?>