<?php
//RECOGEMOS LAS VARIABLES Y LAS METEMOS EN EL ARCHIVO
$nombre = $_GET["nombre"];
$voto = $_GET["voto"];
$archivo = "lista_votos.txt";

$txt = fopen($archivo,"a");
$linea = "Votante:".$nombre."-"."Voto:".$voto. "\n";

fwrite($txt, $linea);
fclose($txt);

//AHORA VOLVEMOS A ABRIR EL TXT PARA DEVOLVER SU CONTENIDO AL HTML
if(file_exists($archivo)){
    $contenido = "";
    $archivo_abierto = fopen($archivo,"r");
    while(!feof($archivo_abierto)){
        $linea = fgets($archivo_abierto);
        if($linea){
            $contenido .= $linea."<br>";
        }
    }
    echo $contenido;
    fclose($archivo_abierto);
}else{
   echo "No hay datos.";
}
?>