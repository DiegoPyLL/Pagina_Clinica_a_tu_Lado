document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('ReservaForm');
    const usuario = document.getElementById('nombre');
    const password = document.getElementById('password');
    const telefono = document.getElementById('telefono');
    const listInputs = document.querySelectorAll(".form-input");

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // limpiar mensajes previos
        listInputs.forEach(el => el.lastElementChild.innerHTML = "");

        let valido = true;

        if (!usuario.value.trim()) {
            mostrarError("nombre", "Por favor ingresa tu nombre");
            valido = false;
        }

        if (!password.value.trim()) {
            mostrarError("password", "Por favor ingresa la contraseña");
            valido = false;
        }

        /* Validamos el campo de Teléfono */
        const regexTelefonoChile = /^\+569\d{8}$/;
        const valorTelefono = telefono.value.trim();

        if (!regexTelefonoChile.test(valorTelefono)) {
            // CORRECCIÓN 1: Nombre de la función corregido
            mostrarError("telefono", "El formato es incorrecto. Debe ser +569 seguido de 8 dígitos (ej: +56912345678).");
            valido = false;
        }

        if (valido) {
            if (usuario.value === "user" && password.value === "1234") {
                // CORRECCIÓN 2: Ruta de redirección ajustada
                window.location.href = "../Reserva/p_pedirHora.html";
            } else {
                mostrarError("password", "Nombre, contraseña o teléfono incorrectos");
            }
        }
    });

    function mostrarError(claseInput, mensaje) {
        let elemento = document.querySelector(`.${claseInput}`);
        elemento.lastElementChild.innerHTML = mensaje;
    }
});