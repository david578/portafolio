/*!
* Start Bootstrap - Full Width Pics v5.0.6 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// Animacion zomm
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.classList.add('zoom'); // Agrega la clase de animación permanentemente
    });
});

// Animacion zomm

// texto escrito "desarrollador web"
document.addEventListener("DOMContentLoaded", function () {
    const texto = "Desarrollador web"; // El texto que deseas mostrar
    const contenedor = document.getElementById("texto-dinamico");

    function escribirTexto() {
        let i = 0; // Reinicia el índice para cada ciclo
        contenedor.textContent = ''; // Limpia el contenedor

        const cursor = document.createElement('span'); // Crea un elemento para el cursor
        cursor.className = 'cursor'; // Agrega la clase para el estilo
        contenedor.appendChild(cursor); // Agrega el cursor al contenedor

        function escribir() {
            
            if (i < texto.length) {
                contenedor.textContent += texto.charAt(i); // Agrega un carácter al contenedor
                i++;
                setTimeout(escribir, 150); // Tiempo entre cada carácter (150 ms)
            } else {
                // Cuando termina de escribir, reinicia después de un breve retraso
                setTimeout(function () {
                    cursor.remove(); // Elimina el cursor
                    escribirTexto(); // Reinicia la función
                }, 1000); // Espera 1 segundo antes de reiniciar
            }
        }

        escribir(); // Inicia la función de escritura
    }

    escribirTexto(); // Inicia la función
});
// texto escrito "desarrollador web"

// funcion descarga

function downloadPDF() {
    const element = document.getElementById('cv-content');
    html2pdf(element, {
        margin:       1,       // Márgenes
        filename:     'Elian_David_CV.pdf', // Nombre del archivo PDF
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 }, // Aumenta la resolución
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' } // Tamaño y orientación de la página
    });
}
// funcion descarga


// funcion barra
// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    // Detecta la sección en vista
    window.addEventListener("scroll", function () {
        let currentSection = "";

        // Itera a través de las secciones para ver cuál está en el viewport
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // Comprueba si la sección actual está en el viewport
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        // Remueve la clase "active" de todos los enlaces y la añade solo al enlace de la sección en vista
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });
});


// funcion barra
