 numero = parseInt(prompt("Inserta un número", 0));
 if(isNaN(numero)){
    alert("Lo que has introducido no es un número");
 }else{
    alert("El número insertado es: " + numero);
        document.write(
            "<table align= 'center'>" +
                "<tr>" +
                    "<th>" + "Tabla de multiplicar" + "</th>" +
                "</tr>" +
            "</table>")

        document.write("<table align = 'center'>")
            for(i = 0; i <= 10; i++){
                document.write(
                    "<tr>" +
                        "<td>" + numero + "*" + i + "</td>" +
                        "<td>" + numero * i + "</td>" +
                    "<tr>"
                )
            }
        document.write ("</table>");
 }
        