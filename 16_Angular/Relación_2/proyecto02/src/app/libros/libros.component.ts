import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-libros',
  imports: [RouterLink],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {
  titulo = "Listado de libros";

  libros = [
    { id: 1, titulo: '1984' },
    { id: 2, titulo: 'El origen de las especies' },
    { id: 3, titulo: 'Don Quijote de la Mancha' }
];
}
