// FILTROS DE PRODUCTOS

const botonesCategoria = document.querySelectorAll(".categoria");
const botonesMascota = document.querySelectorAll(".animal");

const productos = document.querySelectorAll(".tarjeta-producto");

const buscador = document.getElementById("buscarProducto");

const avisoProductos = document.getElementById("avisoProductos");
const sinResultados = document.getElementById("sinResultados");

// Filtros seleccionados inicialmente

let categoriaSeleccionada = "todos";
let mascotaSeleccionada = "todos";


// FILTRAR POR CATEGORÍA

botonesCategoria.forEach(function(boton) {

    boton.addEventListener("click", function() {

        // Quitamos la clase activa de todos los botones

        botonesCategoria.forEach(function(boton) {
            boton.classList.remove("activa");
        });

        // Activamos el botón seleccionado

        boton.classList.add("activa");

        categoriaSeleccionada = boton.dataset.categoria;

        filtrarProductos();

    });

});


// FILTRAR POR MASCOTA

botonesMascota.forEach(function(boton) {

    boton.addEventListener("click", function() {

        // Quitamos la clase activa de todos los botones

        botonesMascota.forEach(function(boton) {
            boton.classList.remove("activa");
        });

        // Activamos el botón seleccionado

        boton.classList.add("activa");

        mascotaSeleccionada = boton.dataset.mascota;

        filtrarProductos();

    });

});


// BUSCADOR

buscador.addEventListener("input", function() {

    filtrarProductos();

});


// FUNCIÓN PRINCIPAL DE FILTRADO

function filtrarProductos() {

    let textoBuscar = buscador.value.toLowerCase();

    let cantidadProductos = 0;
    let cantidadFiltrada = 0;

    productos.forEach(function(producto) {

        let categoria = producto.dataset.categoria;
        let mascota = producto.dataset.mascota;

        let nombreProducto = producto.querySelector("h3").textContent.toLowerCase();

        // Comprobamos la categoría

        let coincideCategoria = (
            categoriaSeleccionada === "todos" ||
            categoria === categoriaSeleccionada
        );

        // Comprobamos la mascota

        let coincideMascota = (
            mascotaSeleccionada === "todos" ||
            mascota === mascotaSeleccionada
        );

        // Comprobamos el buscador

        let coincideBusqueda = nombreProducto.includes(textoBuscar);

        // Mostramos u ocultamos el producto

        if (coincideCategoria && coincideMascota && coincideBusqueda) {

            producto.style.display = "block";
            cantidadProductos++;

        } else {

            producto.style.display = "none";

        }

        // Contamos los productos según los filtros,
        // sin tener en cuenta el texto del buscador

        if (coincideCategoria && coincideMascota) {
            cantidadFiltrada++;
        }

    });


    // MOSTRAR AVISO DE NUEVOS PRODUCTOS

    if (cantidadFiltrada > 0 && cantidadFiltrada < 5 && cantidadProductos > 0) {

        avisoProductos.style.display = "flex";

    } else {

        avisoProductos.style.display = "none";

    }


    // MOSTRAR MENSAJE SI NO HAY RESULTADOS

    if (cantidadProductos === 0) {

        sinResultados.style.display = "block";

    } else {

        sinResultados.style.display = "none";

    }

}