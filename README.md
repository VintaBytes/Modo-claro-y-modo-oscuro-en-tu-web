# Modo Claro / Oscuro en Sitios Web: Cómo Implementarlo desde Cero
En este pequeño y simple proyecto se implementa un interruptor de *modo claro / oscuro* para un sitio web utilizando HTML, CSS y JavaScript. 

<span><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/></span>
<span><img src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"/></span>

Además, se muestra cómo almacenar la preferencia del usuario utilizando el almacenamiento local. ¡Dale a tus visitantes la opción de personalizar la apariencia de tu sitio web con esta útil función!
Este proyecto es perfecto para principiantes que desean tener una base sólida en HTML y CSS para construir su propio sitio web desde cero.

También he preparado un video, en el que te guiaré a través de los pasos necesarios para qué permitas a tus usuarios cambiar entre los modos claro y oscuro de manera fluida:  

<a href="https://youtu.be/c25vFjKxpmY](https://youtu.be/3yIdFVgEBz8">Modo Oscuro en Sitios Web: Cómo Implementarlo desde Cero</a>

<img src="https://github.com/VintaBytes/Modo-claro-y-modo-oscuro-en-tu-web/blob/main/portada.jpeg?raw=true" width="320px">

---

## Explicación del Funcionamiento

1. **HTML (`index.html`)**: Define la estructura de la página con un checkbox para activar/desactivar el modo oscuro y enlaza los archivos CSS y JavaScript.
   
2. **CSS (`style.css`)**: Define estilos para el modo claro y oscuro, incluyendo transiciones suaves entre los modos.
   
3. **JavaScript (`script.js`)**: Controla la lógica del interruptor de modo oscuro, utilizando `localStorage` para recordar la preferencia del usuario entre sesiones.

### Pasos del Script JavaScript

- Obtiene referencias al checkbox y al elemento `<body>`.
- Verifica si el modo oscuro está habilitado en `localStorage` y, de ser así, aplica el modo oscuro y marca el checkbox.
- Añade un evento al checkbox para alternar entre modos claro y oscuro, y guarda la preferencia en `localStorage`.
