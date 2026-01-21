import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEstudiantesService {

  alumnos: any[] = [];

  constructor(){
    //CARGAMOS LOS DATOS DEL LOCALSTORAGE AL ARRAY.
    const localstorage_alumnos = localStorage.getItem('estudiantes');
    if (localstorage_alumnos){
      this.alumnos = JSON.parse(localstorage_alumnos);
    }
  }

  hay_alumnos(){
    return this.alumnos.length > 0;
  }

  borrar(codi: number){
    for (let i = 0; i < this.alumnos.length; i++){
      if (this.alumnos[i].codigo == codi) {
        this.alumnos.splice(i, 1);
        localStorage.setItem('estudiantes', JSON.stringify(this.alumnos));
        return;
      }
    }
  }

  agregar(alumno: any){
    if (alumno.codigo === 0){
      return false; //DEVOVLEMOS FALSE PARA QUE CUANDO LLAMEMOS A LA FUNCIÓN EN EL OTRO ARCHIVO, SI DA FALSE, LO MANEJEMOS CON UN MENSAJE.
    }

    for (let i = 0; i < this.alumnos.length; i++){
      if (this.alumnos[i].codigo === alumno.codigo){
        return false; //IGUAL QUE ANTES. SI DA FALSE, LO MANEJAMOS CUANDO LLAMAMOS A LA FUNCIÓN CON UN MENSAJE.
      }
    }

    this.alumnos.push({
      codigo: alumno.codigo,
      nombre: alumno.nombre,
      promedio: alumno.promedio
    });

    localStorage.setItem('estudiantes', JSON.stringify(this.alumnos));
    return true;
  }

  modificar(alumno: any) {
    for (let i = 0; i < this.alumnos.length; i++){
      if(this.alumnos[i].codigo === alumno.codigo){
        this.alumnos[i].nombre = alumno.nombre;
        this.alumnos[i].promedio = alumno.promedio;
        localStorage.setItem('estudiantes', JSON.stringify(this.alumnos));
        return true;
      }
    }
    return false; //OTRA VEZ, DEVOLVEMOS FALSE SI NO SE LLEVA A CABO PARA MANEAJARLO EN EL OTRO ARCHIVO CON UN MENSAEJE.
  }
}
