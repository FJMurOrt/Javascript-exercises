import { Component } from '@angular/core';
import { ListaComponent } from './lista/lista.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre = 'Ejericio3 Angular CLI 19';
}
