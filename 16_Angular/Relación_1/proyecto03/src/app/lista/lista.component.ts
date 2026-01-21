import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
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
