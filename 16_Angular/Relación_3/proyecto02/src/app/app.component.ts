import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //DECLARAMOS LA VARIBALE DEL ALUMNO QUE SERÁ UN OBJETO
  alumno = {
    codigo: 0,
    nombre: "",
    promedio: 0
  }

  //ARRAY DONDE IREMOS METIENDO A CADA ALUMNO
  alumnos: any[]=[];

  //MENSAJE DE NO HAY ALUMNOS
  mensaje: string = "";

  //FUNCIÓN PARA VER SI HAY REGISTROS, DEVOLVERÁ TRUE O FALSE Y EL HTML YA LO MANEJAMOS PARA MOSTRAR EL MENSAJE DE SI HAY O NO HAY ALUMNOS.
  hay_alumnos(){
    return this.alumnos.length > 0;
  }

  //FUNCIÓN PARA EL CÓDIGO DE BORRAR
  borrar(codi: number){
    for(let i = 0; i < this.alumnos.length; i++){
      if(this.alumnos[i].codigo == codi){
        this.alumnos.splice(i, 1);
        localStorage.clear();
        localStorage.setItem('estudiantes', JSON.stringify(this.alumnos));
        return;
      }
    }
  }

  //FUNCIÓN PARA AGREGAR UN ALUMNO AL ARRAY
  agregar(){
    //QUE AL AGREGAR, EL CÓDIGO DEL ALUMNO QUE QUEREMOS AGREGAR NO SEA 0
    if(this.alumno.codigo === 0){
      alert("Debes introdudcir un código que no sea 0 para el alumno.");
      return;
    }
    //Y TAMPOCO QUE SE PUEDA AGREGAR UN ALUMNO QUE YA EXISTE TAMBIÉN
    for(let i = 0; i < this.alumnos.length; i++){
      if(this.alumnos[i].codigo === this.alumno.codigo){
        alert("Ya existe un alumno con ese código.");
        return;
      }
    }

    //SI PASA ESTAS VALIDACIONES PUES LO METEMOS AL ARRAY DE ALUMNOS COMO UN OBJETO, ES DECIR, COMO UN ALUMNO NUEVO.
    this.alumnos.push({
      codigo: this.alumno.codigo,
      nombre: this.alumno.nombre,
      promedio: this.alumno.promedio
    });
    
    //AGREGAMOS LA LISTA AL LOCALSTORAGE
    localStorage.setItem('estudiantes', JSON.stringify(this.alumnos));

    //VOLVEMOS A PONER LOS VALORES DE LAS PROPIEDADES EL OBJETO ALUMNO POR DEFECTO SIN NADA.
    this.alumno.codigo = 0;
    this.alumno.nombre = "";
    this.alumno.promedio = 0;
  }

    //AHORA LA FUNCIÓN PARA PODER SELECCIONAR UN ALUMNO. ES DECIR, MOSTRAR LOS DATOS DEL ALUMNO SELECCIONADO EN LOS CAMPOS Y POR ASI MODIFICAR AQUELLO QUE QUERAMOS SI QUEREMOS.
  seleccionar(alumno: {codigo: number, nombre: string, promedio: number}){
    this.alumno.codigo = alumno.codigo;
    this.alumno.nombre = alumno.nombre;
    this.alumno.promedio = alumno.promedio;
  }

    //FUNCIÓN PARA PODER MODIFICAR LOS CAMPOS QUE HAYAMOS QUERIDO MODIFICAR AL SELECCIONAR UN ALUMNO.
  modificar(){
    for(let i = 0; i < this.alumnos.length; i++){
      if(this.alumnos[i].codigo === this.alumno.codigo){
        this.alumnos[i].nombre = this.alumno.nombre;
        this.alumnos[i].promedio = this.alumno.promedio;
        return;
      }
    }
    alert("No existe el código del alumno introducido.");
  }
}
