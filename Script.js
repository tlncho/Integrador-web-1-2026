//CARRUSEL
const imagen = document.querySelector(".carrusel img");
const botonAnterior = document.querySelector(".anterior");
const botonSiguiente = document.querySelector(".siguiente");
const nombre = document.querySelector(".nombre");
const dato = document.querySelector(".datos");
const descripcion = document.querySelector(".descripcionAnimal");
const estadoSalud = document.querySelector(".salud");

const fotos = [
      "./Imagenes/Adoptar1.png",
    "./Imagenes/Adoptar2.png",
    "./Imagenes/Adoptar3.png",
    "./Imagenes/Adoptar4.png",
    "./Imagenes/Adoptar5.png",
    "./Imagenes/Adoptar6.png"
];
const nombres = [
    "¡Conocé a Toby!",
    "¡Conocé a Mia!",
    "¡Conocé a Rocky!",
    "¡Conocé a Rafael!",
    "¡Conocé a Lidia!",
    "¡Conocé a Simba!",
];

const datos = [
    "🐶 · 2 meses · Macho",
    "🐱 · 3 meses · Hembra",
    "🐶 · 2 años · Macho",
    "🐱 · 3 años · Macho",
    "🐶 · 3 meses · Hembra",
    "🐱 · 3 meses · Macho"
];

const descripciones = [
    "Cariñoso, juguetón y compañero. Disfruta de los paseos y busca una familia que le dé mucho amor.",
    "Tranquila, dulce y curiosa. Le encantan los mimos y busca un hogar lleno de cariño.",
    "Su expresión transmite confianza y simpatía, y parece de esos compañeros que disfrutan tanto de un paseo como de una buena sesión de juegos. Un amigo ideal para una familia activa.",
   "Rafael es una gato tranquilo y encantador, con un precioso pelaje gris y blanco.Le encantan los lugares cómodos donde pueda relajarse y sentirse querido.",
   "Lidia es una joven labradora de expresión alegre y amigable. Es juguetona, cariñosa y parece disfrutar muchísimo del aire libre.",
   "Simba es un hermoso gatito naranja y blanco, curioso y atento a todo lo que sucede a su alrededor.Es un compañero ideal para llenar el hogar de ronroneos y cariño."


];

const salud = [
    "🩺 Vacunado y desparasitado",
    "🩺 Vacunada y desparasitada",
    "🩺 Vacunado y desparasitado",
    "🩺 Vacunado y desparasitado",
    "🩺 Vacunada y desparasitada",
    "🩺 Vacunado y desparasitado"
];

let i = 0;
let temporizador;
nombre.textContent = nombres[i];
dato.textContent = datos[i];
descripcion.textContent = descripciones[i];
estadoSalud.textContent = salud[i];
console.log(descripcion.textContent);

function cambiarImagen(direccion) {

    // Ocultamos la imagen
    imagen.classList.add("ocultar");

    // Esperamos 1 segundo
    setTimeout(function() {

        // Cambiamos la posición
        i = i + direccion;

        if (i >= fotos.length) {
            i = 0;
        }

        if (i < 0) {
            i = fotos.length - 1;
        }

        // Cambiamos la imagen
        imagen.src = fotos[i];

        // Cambiamos los datos
        nombre.textContent = nombres[i];
        dato.textContent = datos[i];
        descripcion.textContent = descripciones[i];
        estadoSalud.textContent = salud[i];

        // Mostramos la nueva imagen
        imagen.classList.remove("ocultar");

    }, 1000);


    // Reiniciamos el cambio automático
    clearInterval(temporizador);
    temporizador = setInterval(cambiarImagenAutomatica, 5000);
}


function cambiarImagenAutomatica() {
    cambiarImagen(1);
}

// Botón para retroceder
botonAnterior.addEventListener("click", () => {
    cambiarImagen(-1);
});

// Botón para adelantar
botonSiguiente.addEventListener("click", () => {
    cambiarImagen(1);
});

// Cambio automático cada 5 segundos
temporizador = setInterval(() => cambiarImagen(1), 5000);