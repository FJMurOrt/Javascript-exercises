<?php
header("Content-type: application/json");

//DECLARAMOS LAS VARIBALES ANTES QUE VAMOS A USAR
$marca = "";
$modelo = "";
$matricula = "";

//DEPENIENDO DEL NÚMERO QUE RECIBAMOS, DEVOLVEMOS UNOS DATOS U OTROS
if($_REQUEST['coche'] == "1"){
    $marca = "Seat";
    $modelo = "León";
    $matricula = "1111AAA";
}

if($_REQUEST['coche'] == "2"){
    $marca = "Audi";
    $modelo = "R3";
    $matricula = "2222BBB";
}

if($_REQUEST['coche'] == "3"){
    $marca = "Kia";
    $modelo = "Sportage";
    $matricula = "3333CCC";
}

echo json_encode([
    "marca" => $marca,
    "modelo" => $modelo,
    "matricula" => $matricula
]);
?>