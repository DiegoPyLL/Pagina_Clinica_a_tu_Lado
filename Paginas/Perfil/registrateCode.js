/*Variables para la validación del formulario*/
var rut = document.getElementById("rut");
var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo");
var nombre_usu = document.getElementById("nombre_usu");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");
var telefono = document.getElementById("nro_telefono");


/*Constantes para la validación del formulario*/
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");


/* Evitamos el envío del formulario al presionar el botón */
form.addEventListener("submit", (e) => {
    e.preventDefault();
});

/* Función de validación */
function validar() {
    /* Limpiamos mensajes de error cada vez que se presiona enviar */
    listInputs.forEach((element) => {
        element.lastElementChild.innerHTML = "";
    });

    let todoOk = true;

    /* Validamos el campo de Rut */
    if (rut.value.length > 11 || rut.value.length < 9 || rut.value.trim() === "") {
        mostrarMensajeError("rut", "El Rut debe contener entre 9 y 11 caracteres.");
        todoOk = false;
    }

    /* Validamos el campo de Nombre */
    if (nombre.value.length < 2 || nombre.value.length > 50 || nombre.value.trim() === "") {
        mostrarMensajeError("nombre", "El Nombre debe contener entre 2 y 50 caracteres.");
        todoOk = false;
    }

    /* Validamos el formato y largo del correo */
    if (correo.value.trim() === "" || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo.value.trim())) {
        mostrarMensajeError("correo", "El Correo debe tener un formato válido (ejemplo@dominio.com).");
        todoOk = false;
    }
    if (correo.value.length > 100) {
        mostrarMensajeError("correo", "El Correo no debe ser mayor a 100 caracteres.");
        todoOk = false;
    }

    /* Validamos el campo de Usuario */
    if (nombre_usu.value.length < 4 || nombre_usu.value.length > 20 || nombre_usu.value.trim() === "") {
        mostrarMensajeError("nombre_usu", "El Usuario debe contener entre 4 y 20 caracteres.");
        todoOk = false;
    }

    /* Validamos el campo de Contraseña */
    if (password.value.trim().length < 4) {
        mostrarMensajeError("password", "La contraseña debe tener al menos 4 caracteres.");
        todoOk = false;
    }

    /* Validamos si las contraseñas coinciden */
    if (password.value.trim() !== password2.value.trim()) {
        mostrarMensajeError("password2", "Las contraseñas no coinciden.");
        todoOk = false;
    }

    /* Validamos el campo de Teléfono */
    // Expresión regular para validar el formato +569 seguido de 8 dígitos
    const regexTelefonoChile = /^\+569\d{8}$/;

    // Obtenemos el valor del campo y eliminamos espacios en blanco al inicio o final
    const valorTelefono = telefono.value.trim();

    if (!regexTelefonoChile.test(valorTelefono)) {
    mostrarMensajeError("telefono", "El formato es incorrecto. Debe ser +569 seguido de 8 dígitos (ej: +56912345678).");
    todoOk = false;
    }

    // Si todo está ok
    if (todoOk) {
        alert("¡Todos los campos están correctos!");
        form.reset();
        window.location.href = "p_perfil.html";
    }
}

/* Función que muestra el mensaje de error en las validaciones */
function mostrarMensajeError(ClaseInput, mensaje) {
    let elemento = document.querySelector(`.${ClaseInput}`);
    elemento.lastElementChild.innerHTML = mensaje;
}