<?php
//ACCEDEMOS AL ARCHIVO XML PARA LEERLO
$archivo_xml = simplexml_load_file("coches.xml");

//CONTAMOS CUANTAS ETIQUETAS DE "COCHE" HAY EN EL XML, ES DECIR, CUANTOS COCHES HAY.
$numero_de_coches = count($archivo_xml->coche);

//IGUAL QUE EN EL EJERCICIO ANTERIOR, RECORREMOS CADA COCHE Y OBTENEMOS LA MARCA Y EL MODELO Y CONSTRUIMOS LA TABLA.
echo "<table border = '1'>";
    echo "<tr>";
        echo "<td>Marca</td>";
        echo "<td>Modelo</td>";
    echo "</tr>";
for($i = 0; $i < $numero_de_coches; $i++){
    echo "<tr>";
    echo "<td>". $archivo_xml->coche[$i]->marca."</td>";
    echo "<td>". $archivo_xml->coche[$i]->modelo."</td>";
    echo "</tr>";
}
echo "</table>";

?>