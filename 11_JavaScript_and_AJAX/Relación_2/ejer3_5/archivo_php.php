<?php
//ACCEDEMOS AL ARCHIVO XML PARA LEERLO
$archivo_xml = simplexml_load_file("coches.xml");

//CONTAMOS CUANTAS ETIQUETAS DE "COCHE" HAY EN EL XML, ES DECIR, CUANTOS COCHES HAY.
$numero_de_coches = count($archivo_xml->coche);

//SABIENDO CUANTOS COCHES HAY, HACEMOS UN BUCLE FOR PARA IR POR CADA UNO DE ELLOS COGIENDO EL VALOR DE LA ETIQUETA MARCA
for($i = 0; $i < $numero_de_coches; $i++){
    echo "La marca del coche numero".$i+1 .":"." ".$archivo_xml->coche[$i]->marca."<br>";
}
?>