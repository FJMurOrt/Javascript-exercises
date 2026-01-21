import { Component } from '@angular/core';
import { CategoriasComponent } from '../categorias.component';

@Component({
  selector: 'app-ciencia',
  imports: [CategoriasComponent],
  templateUrl: './ciencia.component.html',
  styleUrl: './ciencia.component.css'
})
export class CienciaComponent {
  titulo = "Libros de Ciencia"
  contenido = "Contenido de ciencia."
}
