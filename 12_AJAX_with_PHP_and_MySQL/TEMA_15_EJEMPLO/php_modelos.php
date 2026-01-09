<?php
//PARÁMETROS PARA LA CONEXIÓN
$servidor = "localhost";
$usuario = "root";
$contrasenia = "";
$db = "15_ejemplo";

//NOS CONECTAMOS
$conexion = mysqli_connect($servidor, $usuario, $contrasenia, $db);

//SI FALLA LA CONEXIÓN
if(!$conexion){
    die("Error en la conexión: ". mysqli_connect_error());
}

//RECOGEMOS EL ID QUE NOS MANDA EL HTML
$id = $_GET["marca"]; 

//AHORA LA SENTENCIA SQ QUE VAMOS A NECESITAR Y LA EJECUTAMOS
$sql = "SELECT id,nombre_m FROM modelos WHERE id_marca='$id'";
$resultado = mysqli_query($conexion, $sql);

//AHORA DEVOLVEMOS EL RESULTAMOS Y CONSTRUIMOS
while($fila = mysqli_fetch_assoc($resultado)){
    echo "<option value='".$fila['id']."'>".$fila['nombre_m']."</option>";
}

mysqli_close($conexion);
?>