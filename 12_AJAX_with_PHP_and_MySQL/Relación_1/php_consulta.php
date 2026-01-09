<?php
//DEFINIMOS PARAMETROS DE CONEXIÓN
$servidor = "localhost";
$usuario = "root";
$contrasenia = "";
$bd = "ejercicio1_relacion1";

//ESTABLECEMOS LA CONEXIÓN
$conexion = mysqli_connect($servidor, $usuario, $contrasenia, $bd);

//SI LA CONEXIÓN FALLA
if(!$conexion){
    die("Error en la conexión: ".mysqli_connect_error());
}

//CREAMOS LA CONSULTA Y LA EJECUTAMOS
$sql = "SELECT nombres,departamento,sueldo FROM empleados";
$resultado = mysqli_query($conexion, $sql);

//AHORA OBTENEMOS LOS RESULTAMOS Y SE LOS PASAMOS AL HTML
echo "Nombres - Departamentos - Sueldo"."<br>";
while($fila = mysqli_fetch_assoc($resultado)){
    echo $fila["nombres"]." - ".$fila["departamento"]." - ".$fila["sueldo"]."<br>";
}
?>