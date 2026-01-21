import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-libro-detalle',
  imports: [],
  templateUrl: './libro-detalle.component.html',
  styleUrl: './libro-detalle.component.css'
})
export class LibroDetalleComponent {
  //PROPIEDAD DEL ID DEL LIBRO
  id_libro: number = 0;

  //EL CONSTRUCTOR PARA QUE LEA LA URL CADA VEZ QUE CAMBIE
  constructor(private activatedRoute: ActivatedRoute){
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap)=>{
      this.id_libro = parseInt(parametros.get("id")!);
    });
  }
}
