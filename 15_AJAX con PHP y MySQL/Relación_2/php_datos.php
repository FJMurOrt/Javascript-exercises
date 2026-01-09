<?php
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
$sql = "SELECT idempleado, nombres, departamento, sueldo FROM empleados;";
$resultado = mysqli_query($conexion, $sql);

//DEVOLVEMOS LOS RESULTADOS
echo "<table border = '1'>";
echo "<tr>";
echo "<td style ='background-color: turquoise;'>Código</td>";
echo "<td style ='background-color: turquoise;'>Nombres</td>";
echo "<td style ='background-color: turquoise;'>Departamentos</td>";
echo "<td style ='background-color: turquoise;'>Sueldo</td>";
echo "</tr>";
while($fila = mysqli_fetch_assoc($resultado)){
    echo "</tr><td><a href='#' id=".$fila['idempleado'].">".$fila['idempleado']."</a></td>"."<td style='color: blue;'>".$fila['nombres']."</td>"."<td style='color: blue;'>".$fila['departamento']."</td>"."<td style='color: blue;'>".$fila['sueldo']."</td>";
}
?>