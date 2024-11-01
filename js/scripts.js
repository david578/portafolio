/*!
* Start Bootstrap - Full Width Pics v5.0.6 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.classList.add('zoom'); // Agrega la clase de animación permanentemente
    });
});

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
            console.log("Escribiendo texto...");
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



