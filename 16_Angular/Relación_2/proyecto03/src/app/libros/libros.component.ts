import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LibrosServicioService } from '../libros-servicio.service';

@Component({
  selector: 'app-libros',
  imports: [RouterLink],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {
  titulo = "Listado de libros";

  libros: any;

  constructor(private libro_servicio: LibrosServicioService){
    this.libros = this.libro_servicio.retornar();
  }
}
