<?php
//DEFINIMOS EL FORMATO DE FLUJO QUE ES JSON
header("Content-type: application/json");

//APLICAMOS UN RETARDO DE 3S A LA RESPUESTA
sleep(2);

//CREAMOS UN ARRAY CON LOS NOMBRES QUE ESTÁN ACTUALMENTE OCUPADOS
$nombres_no_dispoibles = ["fran", "pepi", "alejandro", "rocío", "manuel"];

//RECOGEMOS EL NOMBRE QUE ENVÍA EL HTML
if(isset($_GET['nombre'])){
    $nombre = $_GET['nombre'];
}

//INICIACILIZAMOS LA VARIABLE RESPUESTA
$respuesta = [
    "disponible" => true,
    "alternativas" => []
];

if(in_array($nombre, $nombres_no_dispoibles)){
    $respuesta["disponible"] = false;
    $respuesta["alternativas"] = [
        $nombre."_001",
        $nombre."_002",
        $nombre."_".$nombre
    ];
}

echo json_encode($respuesta);
?>