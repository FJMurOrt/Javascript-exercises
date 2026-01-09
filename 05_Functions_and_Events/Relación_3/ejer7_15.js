//CLASE PERSONA
function Persona(nombre, apellidos, dni){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.dni = dni;
    
    //SETTERS PARA LAS PROPIEDADES DE LA CLASE PERSONA
    this.setNombre = function (nombre){
        this.nombre = nombre;
    }
    this.setApellidos = function(apellidos){
        this.apellidos = apellidos;
    }
    this.setDni = function(dni){
        this.dni = dni;
    }

    //GETTERS PARA LAS PROPIEDADES DE LA CLASE PERSONA
    this.getNombre = function(){
        return this.nombre;
    }
    this.getApellidos = function(){
        return this.apellidos;
    }
    this.getDni = function(){
        return this.dni;
    }
}

        let persona1 = new Persona("Juan", "Pérez", "12345678A");

        document.write("Nombre:", persona1.getNombre());
        document.write("<br>");
        document.write("Apellidos:", persona1.getApellidos());
        document.write("<br>");
        document.write("DNI:", persona1.getDni());
        document.write("<br><br>");
        persona1.setNombre("María");
        persona1.setApellidos("Núnez");
        persona1.setDni("000000000");
        document.write("Nombre:", persona1.getNombre());
        document.write("<br>");
        document.write("Apellidos:", persona1.getApellidos());
        document.write("<br>");
        document.write("DNI:", persona1.getDni());
