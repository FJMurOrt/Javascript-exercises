import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-evento-componente3',
  imports: [],
  templateUrl: './evento-componente3.component.html',
  styleUrl: './evento-componente3.component.css'
})
export class EventoComponente3Component {
  @Output() mensaje_hover = new EventEmitter<string>();

  mensaje: string = "¡Pasa el mouse sobre el área de texto para ver el efecto!";

  raton_encima(){
    this.mensaje = "El mouse está sobre el área de texto";
    this.mensaje_hover.emit(this.mensaje);
  }

  raton_fuera(){
    this.mensaje = "¡Pasa el mouse sobre el área de texto para ver el efecto!";
    this.mensaje_hover.emit(this.mensaje);
  }
}
