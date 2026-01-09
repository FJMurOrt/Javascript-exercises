<?php
//VARIABLES
$nombre = $_GET["nombre"];
$departamento = $_GET['departamento'];
$sueldo = $_GET['sueldo'];
$idempleado = $_GET['idempleado'];

//PARAMETROS PARA LA CONEXIÓN
$servidor = "localhost";
$usuario = "root";
$contrasenia = "";
$bd = "ejercicio1_relacion2";

//NOS CONECTAMOS
$conexion = mysqli_connect($servidor,$usuario,$contrasenia,$bd);

//SI FALLA LA CONEXIÓN, MOSTRAMOOS MENSAJE
if(!$conexion){
    die("Error en la conexión: ".mysqli_connect_error());
}

//EJERCUAMOS LA CONSULTA PARA DEVOLVER LOS DATOS
$sql = "UPDATE empleados SET nombres='$nombre', departamento='$departamento', sueldo=$sueldo WHERE idempleado=$idempleado";
$resultado = mysqli_query($conexion, $sql);

mysqli_query($conexion, $sql);
?>