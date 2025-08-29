import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Clase2';
  tituloOriginal = this.title;
  cambio = 0;

  cambiartitulo(){
    const nuevo = document.getElementById('miId') as HTMLInputElement; 
    this.title = nuevo.value;
  }
}
