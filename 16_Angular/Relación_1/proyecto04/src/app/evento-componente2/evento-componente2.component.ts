import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-evento-componente2',
  imports: [],
  templateUrl: './evento-componente2.component.html',
  styleUrl: './evento-componente2.component.css'
})
export class EventoComponente2Component {
  @Output() hacer_foco = new EventEmitter<string>();

  mensaje: string = "Esperando que hagas foco...";
  
  si_hay_foco(){
    this.mensaje = "¡Haz enfocado en el campo de texto!";
    this.hacer_foco.emit(this.mensaje);
  }

  si_no_hay_foco(){
    this.mensaje = "Esperando que hagas foco...";
    this.hacer_foco.emit(this.mensaje);
  }
}
