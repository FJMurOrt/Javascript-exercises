<?php
//RECOGEMOS LAS VARIABLE DEL NÚMERO
if(isset($_GET['numero'])){
    $num = $_GET['numero'];
}else{
    echo "No se recibió ningún número";
}

//DEVOLVEMOS EL NÚMERO AL CUADRADO
$numero_al_cuadrado = $num * $num;
echo $numero_al_cuadrado;
?>