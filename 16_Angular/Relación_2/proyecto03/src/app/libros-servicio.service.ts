import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrosServicioService {

  constructor() { }

  retornar() {
    return [
      { id: 1, titulo: '1984', autor: 'George Orwell', descripcion: 'Distopía clásica.' },
      { id: 2, titulo: 'El origen de las especies', autor: 'Charles Darwin', descripcion: 'Teoría de la evolución.' },
      { id: 3, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', descripcion: 'Novela española clásica.' }
    ];
  }
}
