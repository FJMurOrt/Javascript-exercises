        //ACCEDEMOS A LOS ENLANCES
        let enlace_1 = document.getElementById("enlace_1");
        let enlace_2 = document.getElementById("enlace_2");
        let div = document.getElementById("resultado");

        //FUNCIÓN PARA CREAR LA PETICIÓN EN FUNCIÓN DEL NAVEGADOR COMPATIBLE
            function crearPeticionSegunNavegador(){
                let objeto_de_peticion = false;
                try{
                    objeto_de_peticion = new XMLHttpRequest();
                }catch(primer_error){
                    try{
                        objeto_de_peticion = ActiveXObject("Msxml2.XMLHTTP");
                    }catch(segundo_error){
                        try{
                            objeto_de_peticion = ActiveXObject("Microsoft.XMLHTTP");
                        }catch(tercer_error){
                            objeto_de_peticion = false;
                        }
                    }
                }
                return objeto_de_peticion;
            }

        //EVENTO Y FUNCIONES
        enlace_1.addEventListener("click", function(evento){
            evento.preventDefault();

            //ABRIMOS LA PETICIÓN Y LA DEFINIMOS CON GET
            let peticion = crearPeticionSegunNavegador();
            let url = "archivo_php.php?enlace=1";
            peticion.open("GET", url, true);

            //VERIFICAMOS LA RESPUESTA DEL SERVIDOR
            peticion.onreadystatechange = respuestaServidor;

            function respuestaServidor(){
                if(peticion.readyState ===  4 && peticion.status === 200){
                        div.innerHTML = peticion.responseText; 
                }
            }

            peticion.send();
        });

        enlace_2.addEventListener("click", function(evento){
            evento.preventDefault();

            //ABRIMOS LA PETICIÓN Y LA DEFINIMOS CON GET
            let peticion = crearPeticionSegunNavegador();
            let url = "archivo_php.php?enlace=2";
            peticion.open("GET", url, true);

            //VERIFICAMOS LA RESPUESTA DEL SERVIDOR
            peticion.onreadystatechange = respuestaServidor;

            function respuestaServidor(){
                if(peticion.readyState ===  4 && peticion.status === 200){
                        div.innerHTML = peticion.responseText; 
                }
            }

            peticion.send()
        });