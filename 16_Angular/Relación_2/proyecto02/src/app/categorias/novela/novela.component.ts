import { Component } from '@angular/core';
import { CategoriasComponent } from '../categorias.component';

@Component({
  selector: 'app-novela',
  imports: [CategoriasComponent],
  templateUrl: './novela.component.html',
  styleUrl: './novela.component.css'
})
export class NovelaComponent {
  titulo = "Libros de Novela"
  contenido = "Contenido de novela."
}
