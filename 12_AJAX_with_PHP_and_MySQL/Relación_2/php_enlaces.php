<?php
//OBETNEMOS LA VARIABLE DEL ENLACE

$enlace= $_GET["enlace"];

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
$sql = "SELECT nombres, departamento, sueldo FROM empleados WHERE idempleado=$enlace";
$resultado = mysqli_query($conexion, $sql);

//DEVOLVEMOS LOS RESULTADOS, COMO EN ESTE CASO SOLO ES 1 REGISTRO, NO HACEMOS WHILE
$fila = mysqli_fetch_assoc($resultado);
echo "Nombres: <input type='text' id='nombre' value=".$fila['nombres'].">"."<br>";

//IMPRIMIMOS LOS DEPARTAMENTOS CON OTRA SENTENCIA SQL
$sql_departamentos = "SELECT DISTINCT departamento FROM empleados";
$resultado_departamentos = mysqli_query($conexion, $sql_departamentos);

//DEVOLVEMOS LOS RESULTADOS PARA LOS DEPARTAMENTOS
echo "Departamento:
<select id='departamentos'>";

while($depart = mysqli_fetch_assoc($resultado_departamentos)){
    echo "<option value=".$depart['departamento'];
    if($depart['departamento'] === $fila['departamento']){
        echo " selected";
    }
    echo ">".$depart['departamento']."</option>";
}

echo "</select><br>";

//IMPRIMIMOS EL RESTO
echo "Sueldo S/.: <input type='text' id='sueldo' value=".$fila['sueldo'].">"."<br><br>";
echo "<input type='button' id='actualizar' value='Actualizar'>"."<br>";
?>