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
    // Expresión regular para validar el formato +569 seguido de 8 dígitos
    const regexTelefonoChile = /^\+569\d{8}$/;

    // Obtenemos el valor del campo y eliminamos espacios en blanco al inicio o final
    const valorTelefono = telefono.value.trim();

    if (!regexTelefonoChile.test(valorTelefono)) {
    mostrarMensajeError("telefono", "El formato es incorrecto. Debe ser +569 seguido de 8 dígitos (ej: +56912345678).");
    valido = false;
    }

    if (valido) {
      if (usuario.value === "user" && password.value === "1234") {
       
        // redirigir a otra página
        window.location.href = "p_formularioReserva.html";
      } else {
        mostrarError("password", "nombre o contraseña incorrectos");
      }
    }
  });

  function mostrarError(claseInput, mensaje) {
    let elemento = document.querySelector(`.${claseInput}`);
    elemento.lastElementChild.innerHTML = mensaje;
  }  

  
});
