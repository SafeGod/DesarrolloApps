import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tercero',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tercero.component.html',
  styleUrl: './tercero.component.css'
})
export class TerceroComponent {
  title = 'Clase2'; 
  nuevoTitulo: string = '';

  cambiartitulo() {
    if (this.nuevoTitulo.trim() !== '') {
      this.title = this.nuevoTitulo;
      this.nuevoTitulo = ''; 
    }
  }
}
