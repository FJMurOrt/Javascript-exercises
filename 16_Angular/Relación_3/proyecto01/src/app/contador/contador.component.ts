import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  //LAS VARIABLES QUE TENDRÁ DE ENTRADA Y QUE SERÁ EL PADRE QUIEN SE LAS PASE.
  @Input() valor_inicial: number = 0;
  @Input() valor_limite: number = 0;

  //LA VARIABLE, QUE EN ESTE CASO SERÁ EL EVENTO, QUE SACARÁ PARA QUE EL PADRE PUEDA RECIBIRLA.
  @Output() se_ha_llegado_al_valor_maximo = new EventEmitter();

  //PROPIEDADES QUE NECESITAMOS PARA PROCESAR EL JUEGO
  contador: number = 0;

  intervalo: any;

  //SE INICIA AL INCIAR EL COMPONENTE
  ngOnInit(){
    this.contador = this.valor_inicial;
    this.intervalo = setInterval(()=>{
      if(this.contador < this.valor_limite){
        this.contador++;
      }
      if(this.contador == this.valor_limite){
        this.se_ha_llegado_al_valor_maximo.emit();
        clearInterval(this.intervalo);
      }
    }, 1000);
  }
}
