import { Component } from '@angular/core';
import { EventoComponenteComponent} from "./evento-componente/evento-componente.component";
import { EventoComponente2Component } from "./evento-componente2/evento-componente2.component";
import { EventoComponente3Component } from "./evento-componente3/evento-componente3.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EventoComponenteComponent, EventoComponente2Component, EventoComponente3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = "Ejemplo de manejo de Eventos en Angular";
  tecla: string = "";
  mensaje_del_foco: string = "Esperando que hagas foco...";

  obtener_letra(letra: string){
    this.tecla = letra;
  }

  obtener_mensaje_foco(mensaje: string){
    this.mensaje_del_foco = mensaje;
  }
}
