import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LibrosComponent } from '../libros/libros.component';

@Component({
  selector: 'app-categorias',
  imports: [RouterOutlet, RouterLink, LibrosComponent],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
titulo = "Categorías";
}
