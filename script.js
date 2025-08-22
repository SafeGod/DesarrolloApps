const tareaInput = document.getElementById('inputComida');
const agregarBtn = document.getElementById('botonAgregar');
const listaTareas = document.getElementById('Lista');


agregarBtn.addEventListener('click', function () {
    const nuevaTareaTexto = tareaInput.value;
    if (nuevaTareaTexto === '') return;


    const nuevaTareaLi = document.createElement('li');
    nuevaTareaLi.textContent = nuevaTareaTexto;
    listaTareas.appendChild(nuevaTareaLi);


    tareaInput.value = '';
});