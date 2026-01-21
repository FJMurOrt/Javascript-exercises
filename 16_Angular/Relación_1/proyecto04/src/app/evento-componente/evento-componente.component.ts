import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-evento-componente',
  imports: [],
  templateUrl: './evento-componente.component.html',
  styleUrl: './evento-componente.component.css'
})
export class EventoComponenteComponent {
  //EVENTO PERSONALIZADO QUE LE PASAREMOS AL PADRE.
  @Output() tecla_pulsada = new EventEmitter<string>();

  //ESTA ES LA FUNCIÓN QUE SE EJECUTARÁ CUANDO SE PULSE UNA TECLA CON EL EVENTO KEYDOWN.
  obtener_tecla(event: any){
    const tecla = event.key;
    this.tecla_pulsada.emit(tecla);
  }
}
