// Obtiene una referencia al elemento HTML con el ID 'boton-modo'.
let boton = document.getElementById('boton-modo');

// Obtiene una referencia al elemento <body> del documento.
let body = document.body;

// Comprueba si la variable 'modoOscuro' almacenada en el 
// almacenamiento local (localStorage) está configurada como 'enabled'.
let esModoOscuro = localStorage.getItem('modoOscuro') === 'enabled';

// Si 'modoOscuro' está configurado como 'enabled' en el almacenamiento
// local, agrega la clase 'modo-oscuro' al elemento <body> y marca el 
// botón de modo oscuro como activado (checked).
if (esModoOscuro) {
    body.classList.add('modo-oscuro');
    boton.checked = true;
}

// Agrega un evento 'change' al botón.
boton.addEventListener('change', () => {
    // Cuando el estado del botón cambia (se marca o desmarca),
    // verifica si el botón está marcado.
    if (boton.checked) {
        // Si está marcado, agrega la clase 'modo-oscuro' al elemento 
        //<body> para activar el modo oscuro.
        body.classList.add('modo-oscuro');

       // Guarda la configuración 'modoOscuro' como 'enabled' en el 
       // almacenamiento local.
        localStorage.setItem('modoOscuro', 'enabled');
    } else {
        // Si no está marcado, remueve la clase 'modo-oscuro' del elemento
        // <body> para desactivar el modo oscuro.
        // Luego, guarda la configuración 'modoOscuro' como 'disabled' en
        // el almacenamiento local.
        body.classList.remove('modo-oscuro');
        localStorage.setItem('modoOscuro', 'disabled');
    }
});