<?php
//PRIMERO NOS CONECTAMOS A LA BASE DE DATOS
$servidor = "localhost";
$usuario = "root";
$contrasenia = "";
$bd = "15_ejemplo";

//NOS CONECTAMOS
$conexion = mysqli_connect($servidor, $usuario, $contrasenia, $bd);

//SI FALLA LA CONEXIÓN
if(!$conexion){
    die("Error en la conexión: ". mysqli_connect_error());
}

//EJECUTAMOS LA CONSULTA SQL
$sql = "SELECT id,nombre FROM marcas";
$resultado = mysqli_query($conexion, $sql);

//AHORA DEVOLVEMOS EL RESULTADO SI HAY RESULTADOS Y SE IMPRIMIRÁ EN EL HTML DONDE HAYAS DEFINIDO LA RESPUESTA DEL SERVIDOR
while($fila = mysqli_fetch_assoc($resultado)){
    echo "<option value = '".$fila["id"]."'>".$fila["nombre"]."</option>";
}

mysqli_close($conexion);
?>