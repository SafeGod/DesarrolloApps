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

  agregar() {
    const tareaInput = document.getElementById('inputComida') as HTMLInputElement;
    // const agregarBtn = document.getElementById('botonAgregar');
    const listaTareas = document.getElementById('Lista') as HTMLDataListElement;

    const nuevaTareaTexto = tareaInput.value;
    if (nuevaTareaTexto === '') return;


    const nuevaTareaLi = document.createElement('li');
    nuevaTareaLi.textContent = nuevaTareaTexto;

    //Creamos el boton de eliminar
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.style.marginLeft = '30px';

    //Evento para el boton de borrar el elemento hijo 
    botonEliminar.addEventListener('click', function () {
      listaTareas.removeChild(nuevaTareaLi);
    });

    // Agregar el botón al li
    nuevaTareaLi.appendChild(botonEliminar);
    listaTareas.appendChild(nuevaTareaLi);

    tareaInput.value = '';
  }
}
