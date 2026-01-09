//CREAMOS LA CLASE DEL CLIENTE DE BANCO
class clienteBanco{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    //CREAMOS LOS MÉTODOS DEPOSITAR Y EXTRAER
    depositar(cantidad){
        this.saldo = this.saldo + cantidad;
    }

    extraer(cantidad){
        if(cantidad > this.saldo){//CREAMOS ESTE CONDICIONAL PARA EN CASO DE NO TENER SUFICIENTE SALDO, LA EXTRACCIÓN NO SE PUEDA REALIZAR.
            alert("No hay suficiente saldo como para extraer la cantidad solicitada. Tu saldo actual es de "+this.saldo+".");
            return;
        }else{
            this.saldo = this.saldo - cantidad;
        }
    }
}