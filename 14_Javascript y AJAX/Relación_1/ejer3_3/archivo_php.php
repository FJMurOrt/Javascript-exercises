<?php
$contenido_del_mensaje = "En cuanto a los resultados en la aprte principal, 
pues tiene en formatod e los demas buscadores. El titulo de pagina, descripción de esta, 
enlaces, etc. Algo a lo que ya estamos acostumbrados con los mas conocidos buscadores.";

//ABRIMOS (Y CREAMOS) EL ARCHIVO DE TXT DONDE VAMOS A COPIAR EL CONTENIDO.
$archivo = fopen("mensaje.txt", "a");
fwrite($archivo, $contenido_del_mensaje);
fclose($archivo);

//LO VOLVEMOS A ABRIR PARA LEER EL CONTENIDO Y PASARSELO AL HTML

$lectura = fopen("mensaje.txt", "r");
echo fread($lectura, filesize("mensaje.txt"));
fclose($lectura);
?>