import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //PROPIEDADES
  nombre = 'Ejercicio 1 Angular CLI 19';
  contador = 0;
  items: string[]= [];

  //MÉTODOS
  incrementarContador(){
    this.contador++;
  }

  agregarItem(){
    let posicion = this.items.length+1;
    this.items.push("Elemento"+posicion);
  }

  limpiarLista(){
    this.items = [];
  }
}
