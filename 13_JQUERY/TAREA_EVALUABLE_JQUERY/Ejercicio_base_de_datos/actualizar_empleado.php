<?php
//RECOGEMOS LAS VARIABLES DEL ID DEL EMPLEADO Y LOS CAMPOS DEL HTML
if(isset($_GET['idempleado'], $_GET['nombre'], $_GET['departamento'], $_GET['sueldo'])){
    $id = $_GET['idempleado'];
    $nombre = $_GET['nombre'];
    $departamento = $_GET['departamento'];
    $sueldo = $_GET['sueldo'];
}

//PARAMETROS CONEXIÓN
$host = "localhost";
$usuario = "root";
$contrasenia = "";
$bd = "ejercicio1_relacion1";

//NOS CONECTAMOS AL SERVIDOR
$conexion = mysqli_connect($host, $usuario, $contrasenia, $bd);

//VERIFICAMOS LA CONEXIÓN
if(!$conexion){
    die("Hubo un problema al intentar estavlecer la conexión". mysqli_connect_error());
}

//CREAMOS LA SENTENCIA PARA ACTUALIZAR LOS DATOS EN LA BASE DE DATOS
$sql = "UPDATE empleados SET nombres='$nombre', departamento='$departamento', sueldo=$sueldo WHERE idempleado=$id";
$resultado = mysqli_query($conexion, $sql);


if(mysqli_affected_rows($conexion) > 0){
    echo "Empleado actualizado correctamente.";
} else {
    echo "No se actualizó ningún registro.";
}

mysqli_close($conexion);