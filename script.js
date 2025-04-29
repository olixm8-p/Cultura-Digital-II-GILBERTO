// Mostrar alerta de bienvenida con animación
window.onload = function() {
    alert("¡Bienvenido a mi página web!");
}

// Cambiar el color de fondo con un efecto suave al hacer clic en el encabezado
function cambiarColorFondo() {
    document.body.style.transition = "background-color 0.5s ease";
    document.body.style.backgroundColor = "#f39c12"; // Color vibrante
}

// Asignamos la función al evento de clic en el encabezado
document.querySelector('h1').addEventListener('click', cambiarColorFondo);

// Mostrar la fecha actual en la página
function mostrarFecha() {
    var fecha = new Date();
    var fechaFormateada = fecha.toLocaleDateString();
    document.getElementById('fecha').innerHTML = "Fecha actual: " + fechaFormateada;
}

// Mostrar un mensaje interactivo al hacer clic en un botón
function mostrarMensaje() {
    alert("¡Gracias por interactuar con la página!");
}

// Llamamos a la función para mostrar la fecha al cargar la página
mostrarFecha();
