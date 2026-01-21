import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  valor_inicial: number = 0;
  valor_limite: number = 10;

  contadores_finalizados: number = 0;
  mensaje_final: string = "";

  cuando_un_contador_llegue_al_maximo(){
    this.contadores_finalizados++;
    this.mensaje_final = "Ronda finalizada: todos los contadores llegaron al límite.";
  }
}
