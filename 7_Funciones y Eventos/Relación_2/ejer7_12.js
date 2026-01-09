//CREAMOS LA CLASE
        function ClienteBanco(nombre, saldo){
            this.nombre = nombre;
            this.saldo = saldo;
            this.depositar = depositar;
            this.extraer = extraer;
        }

        //CREAMOS LOS MÉTODOS DEPOSITAR Y EXTRAER
        function depositar(cantidad){
            total = this.saldo + cantidad;
            this.saldo = total;
            document.write(this.saldo);
        }

        function extraer(cantidad){
            total = this.saldo - cantidad;
            this.saldo = total;
            document.write(this.saldo);
        }

        cliente_nuevo = new ClienteBanco("Fran", 1000);

        cliente_nuevo.depositar(100);
        document.write("<br><br>");
        cliente_nuevo.extraer(300);