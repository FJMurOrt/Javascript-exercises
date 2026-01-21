import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServicioEstudiantesService } from './servicio-estudiantes.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //MANTENEMOS LA VARIABLE DEL ALUMNO AQUI
  alumno = {
    codigo: 0,
    nombre: "",
    promedio: 0
  };

  constructor(public estudiantes_servicio: ServicioEstudiantesService) {}

  //Y PARA LAS FUNCIONES, SIMPLEMENTE ESTAMOS LLAMANDO A LAS FUNCIONES QUE SE ENCUENTRAND DEFINIDAS EN EL ARCHIVO DEL SERVICIO QUE ES DONDE HEMOS PASADO A LÓGICA DE ÉSTAS.
  hay_alumnos() {
    return this.estudiantes_servicio.hay_alumnos();
  }

  borrar(codi: number) {
    this.estudiantes_servicio.borrar(codi);
  }

  agregar() {
    if (!this.estudiantes_servicio.agregar(this.alumno)){
      alert("No se pudo agregar el alumno porque el código es 0 o el código que intentas agregar ya existe.");
      return;
    }
    this.alumno.codigo = 0;
    this.alumno.nombre = "";
    this.alumno.promedio = 0;
  }

  seleccionar(alumno: { codigo: number, nombre: string, promedio: number }){
    this.alumno.codigo = alumno.codigo;
    this.alumno.nombre = alumno.nombre;
    this.alumno.promedio = alumno.promedio;
  }

  modificar() {
    if (!this.estudiantes_servicio.modificar(this.alumno)){
      alert("No existe el código del alumno introducido.");
    }
  }
}
