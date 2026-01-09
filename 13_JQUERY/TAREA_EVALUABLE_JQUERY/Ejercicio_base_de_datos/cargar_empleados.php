<?php
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

//CREAMOS LA SENTENCIA SQL Y LA EJECUTAMOS
$sql = "SELECT idempleado, nombres, departamento, sueldo FROM empleados";
$resultado = mysqli_query($conexion,$sql);

//DEVOLVEMOS LOS RESULTADOS
echo "<table style='border: 1px solid red; color: blue;'>";
echo "<tr style='background-color: lightblue;'>";
echo "<td>Código</td>";
echo "<td>Nombres</td>";
echo "<td>Departamento</td>";
echo "<td>Sueldo</td>";
echo "</tr>";

while($fila = mysqli_fetch_assoc($resultado)){
    echo "<tr style='color: blue;'>"."<td><a href='#' id='".$fila['idempleado']."'>".$fila['idempleado']."</a>"."</td>"."<td>".$fila['nombres']."</td>"."<td>".$fila['departamento']."</td>"."<td>".$fila['sueldo']."</td"."</tr>";
}

echo "</table>";

mysqli_close($conexion);
?>