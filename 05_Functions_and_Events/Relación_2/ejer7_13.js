function numeroquiniela(nombre, numero){
    this.nombre = nombre;
    this.numero = parseInt(prompt("Introduce un número del 0 al 9"));
}

function bolillero(){
    this.aleatorio = Math.floor(Math.random() * (9 - 0 + 1));
}


//JUGADORES
jugador1 =  new numeroquiniela("Pepe");
jugador2 = new numeroquiniela("María");

//NUMERO ALEATORIO
num_ganador = new bolillero();

document.write("Numero sorteado: "+num_ganador.aleatorio);
document.write("<br><br>");
document.write(jugador1.nombre+" eligió "+jugador1.numero);
document.write("<br><br>");
document.write(jugador2.nombre+" eligió "+jugador2.numero);
document.write("<br><br>");




if(jugador1.numero === num_ganador.aleatorio){
    document.write(jugador1.nombre+" ha ganado");
}else{
    document.write(jugador1.nombre+" no ha sido agraciado");
}

document.write("<br><br>");

if(jugador2.numero === num_ganador.aleatorio){
    document.write(jugador2.nombre+" ha ganado");
}else if(jugador2.numero !== num_ganador.aleatorio){
    document.write(jugador2.nombre+" no ha sido agraciado");
}




