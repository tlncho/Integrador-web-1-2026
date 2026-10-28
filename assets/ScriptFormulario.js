
const formulario = document.querySelector(".formulario");

const nombre = document.getElementById("nombre");
const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
const spanNombre = document.createElement("span");
spanNombre.className = "spanError";

const correo = document.getElementById("correo");
const spanCorreo = document.createElement("span");
spanCorreo.className = "spanError";
const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const telefono = document.getElementById("telefono");
const spanTelefono = document.createElement("span");
spanTelefono.className = "spanError";
const regexTelefono = /^\+?[0-9]{8,15}$/;

const fecha = document.getElementById("fecha");
const spanFecha = document.createElement("span");
spanFecha.className = "spanError";

const hoy = new Date().toISOString().split("T")[0];

const mensajeEnviado = document.getElementById("mensajeEnviado");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

   
    let bandera = true;

    // Validar nombre
    const nombreIngresado = nombre.value.trim();

    if (nombreIngresado.length < 6) {
        spanNombre.textContent = "Ingrese nombre y apellido";
        nombre.insertAdjacentElement("afterend", spanNombre);
        bandera = false;

    } else if (!regexNombre.test(nombreIngresado)) {
        spanNombre.textContent = "El nombre solo puede contener letras y espacios";
        nombre.insertAdjacentElement("afterend", spanNombre);
        bandera = false;

    } else {
        spanNombre.textContent = "";
    }

    // Validar correo
    if (!regexCorreo.test(correo.value)) {
        spanCorreo.textContent = "Ingrese un correo válido";
        correo.insertAdjacentElement("afterend", spanCorreo);
        bandera = false;

    } else {
        spanCorreo.textContent = "";
    }

    // Validar teléfono 
    if (telefono.value.trim() !== "" && !regexTelefono.test(telefono.value)) {
        spanTelefono.textContent = "Ingrese un teléfono válido";
        telefono.insertAdjacentElement("afterend", spanTelefono);
        bandera = false;

    } else {
        spanTelefono.textContent = "";
    }

    // Validar fecha
    if (fecha.value === "") {
        spanFecha.textContent = "Ingrese una fecha de consulta";
        fecha.insertAdjacentElement("afterend", spanFecha);
        bandera = false;

    } else if (fecha.value <= hoy) {
        spanFecha.textContent = "La fecha debe ser posterior a hoy";
        fecha.insertAdjacentElement("afterend", spanFecha);
        bandera = false;

    } else {
        spanFecha.textContent = "";
    }

    // Si todas las validaciones son correctas
    if (bandera === true) {
        formulario.style.display = "none";
        mensajeEnviado.style.display = "block";
    }

});

//Resetear los span al hacer focus en el input
nombre.addEventListener("focus", function() {
    spanNombre.textContent = "";
});

correo.addEventListener("focus", function() {
    spanCorreo.textContent = "";
});

telefono.addEventListener("focus", function() {
    spanTelefono.textContent = "";
});

fecha.addEventListener("focus", function() {
    spanFecha.textContent = "";
});