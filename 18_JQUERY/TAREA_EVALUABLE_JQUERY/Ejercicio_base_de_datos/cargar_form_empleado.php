<?php
//RECOGEMOS LA VARIBLE DEL ID DEL EMPLEADO QUE DEBEMOS RECIBIR DEL HTML.
if(isset($_GET['idempleado'])){
    $id = $_GET['idempleado'];
}

//PARAMETROS CONEXIÓN.
$host = "localhost";
$usuario = "root";
$contrasenia = "";
$bd = "ejercicio1_relacion1";

//NOS CONECTAMOS AL SERVIDOR
$conexion = mysqli_connect($host, $usuario, $contrasenia, $bd);

//VERIFICAMOS LA CONEXIÓN.
if(!$conexion){
    die("Hubo un problema al intentar estavlecer la conexión". mysqli_connect_error());
}

//CREAMOS LA SENTENCIA SQL.
$sql = "SELECT idempleado, nombres, departamento, sueldo FROM empleados WHERE idempleado=$id";
$resultado = mysqli_query($conexion,$sql);

//EL RESULTADO OBTENIDO ES SÓLO UN REGISTRO CON LOS DATOS,
$fila_resultado = mysqli_fetch_assoc($resultado);

//DEVOLVEMOS EL CAMPO DEL NOMBRE DEL EMPLEADO CON EL NOMBRE BUSCADO COMO VALOR.
echo "Nombre: <input type='text' id='nombre' value='".$fila_resultado['nombres']."'><br>";

//AHORA CREAMOS OTRA SENTENCIA SQL PARA OBTENER TODOS LOS DEPARTAMENTOS ÚNICOS
$sql_departamentos = "SELECT DISTINCT departamento FROM empleados";
$resultado_departamentos = mysqli_query($conexion, $sql_departamentos);

//DEVOLVEMOS UN SELECT CON LOS DEPARTAMENTOS Y PONEMOS COMO SELECCIONADO POR DEFECTO EL DEL EMPLEADO QUE HEMOS PASADO COMO ID.
echo "Departamento: <select id='departamentos'>";
while($fila_departamentos = mysqli_fetch_assoc($resultado_departamentos)){
    if($fila_departamentos['departamento'] == $fila_resultado['departamento']){
        echo "<option selected>".$fila_resultado['departamento']."</option>";
    }else{
        echo "<option>".$fila_departamentos['departamento']."</option>";
    }
}
echo "</select><br>";

//DEVOLVEMOS EL CAMPO DEL SUELDO.
echo "Sueldo S/.: <input type='text' id='sueldo' value='".$fila_resultado['sueldo']."'><br><br>";

//DEVOLVEMOS TAMBIÉN EL BOTÓN ACTUALIZAR EN EL FORMUALRIO
echo "<input type='button' id='actualizar' value='Actualizar'><br><br>";
?>