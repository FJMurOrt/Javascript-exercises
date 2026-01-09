<?php
//LEEMOS EL ARCHIVO XML
$archivo_xml = simplexml_load_file("email.xml");

//AHORA, COMO SI FUERA UN OBJETO EN PHP, ACCEDEMOS AL VALOR DE CADA ETIQUETA O NO COMO SI FUERA UNA PROPIEDAD
//Y CONSTRUIMOS LO QUE QUEREMOS DEVOLVER Y MOSTRAR EN EL HTML
echo "<h1>Mostrar un mensaje de tipo mail cifrado en XML</h1><br><br>";
echo "Autor:".$archivo_xml->de."<br>";
echo "Destino:".$archivo_xml->para ."<br>";
echo "Asunto:".$archivo_xml->entete ."<br>";
echo "Mensaje:".$archivo_xml->mensaje ."<br>";
?>