document.addEventListener('DOMContentLoaded', function () {
    
    const form = document.getElementById('seguro-form');
    // ✨ NUEVO: Obtener la instancia del Modal de Bootstrap
    const modalConfirmacion = new bootstrap.Modal(document.getElementById('modalConfirmacion'));

    form.addEventListener('submit', function (event) {
        
        event.preventDefault();
        limpiarErrores();
        
        if (!validarFormulario()) {
            console.log('El formulario contiene errores.');
            return;
        }
        
        const datosContrato = {
            rut: document.getElementById('rut').value,
            nombres: document.getElementById('nombres').value,
            fechaNacimiento: document.getElementById('fecha-nacimiento').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            planNombre: document.getElementById('plan-nombre').textContent,
            planPrecio: document.getElementById('plan-precio').textContent,
            metodoPago: document.getElementById('pago').value,
            aceptaTerminos: document.getElementById('terminos').checked
        };
        
        console.log('Datos del contrato guardados:', datosContrato);
        
     
        
        // 1. Personalizar el mensaje dentro del pop-up
        const mensajeCuerpo = document.getElementById('mensaje-modal-cuerpo');
        mensajeCuerpo.innerHTML = `¡Gracias por contratar nuestro seguro, <strong>${datosContrato.nombres}</strong>! <br><br> Te hemos enviado un correo a <strong>${datosContrato.email}</strong> con los detalles de tu póliza.`;

        // 2. Mostrar el pop-up
        modalConfirmacion.show();

        // 3. Limpiar el formulario para una nueva contratación
        form.reset();
    });
    
    // --- Funciones de Ayuda para la Validación (sin cambios) ---
    
    function validarFormulario() {
        let esValido = true;
        
        if (!validarRut(document.getElementById('rut').value)) {
            mostrarError('rut', 'El RUT no es válido.');
            esValido = false;
        }
        if (document.getElementById('nombres').value.trim() === '') {
            mostrarError('nombres', 'El nombre es requerido.');
            esValido = false;
        }
        if (document.getElementById('fecha-nacimiento').value === '') {
            mostrarError('fecha-nacimiento', 'La fecha de nacimiento es requerida.');
            esValido = false;
        }
        if (!/^\S+@\S+\.\S+$/.test(document.getElementById('email').value)) {
            mostrarError('email', 'El formato del correo no es válido.');
            esValido = false;
        }
        if (document.getElementById('pago').value === '') {
            mostrarError('pago', 'Seleccione un método de pago.');
            esValido = false;
        }
        if (!document.getElementById('terminos').checked) {
            mostrarError('terminos', 'Debes aceptar los términos y condiciones.');
            esValido = false;
        }
        
        return esValido;
    }

    function mostrarError(idCampo, mensaje) {
        const campo = document.getElementById(idCampo);
        const contenedor = campo.closest('.form-field, .form-field-checkbox, .terms-section');
        contenedor.classList.add('has-error');
        const spanError = contenedor.querySelector('.error-message');
        if (spanError) {
            spanError.textContent = mensaje;
            spanError.style.display = 'block';
        }
    }
    
    function limpiarErrores() {
        document.querySelectorAll('.has-error').forEach(campo => campo.classList.remove('has-error'));
        document.querySelectorAll('.error-message').forEach(span => span.textContent = '');
    }

    function validarRut(rutCompleto) {
        if (!rutCompleto) return false;
        const rutLimpio = rutCompleto.replace(/\./g, '').trim();
        if (!/^[0-9]+-[0-9kK]{1}$/.test(rutLimpio)) return false;
        const [cuerpo, dv] = rutLimpio.split('-');
        const dvMinuscula = dv.toLowerCase();
        let suma = 0;
        let multiplicador = 2;
        for (let i = cuerpo.length - 1; i >= 0; i--) {
            suma += parseInt(cuerpo.charAt(i)) * multiplicador;
            multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
        }
        const resto = suma % 11;
        const dvEsperado = 11 - resto;
        let dvCalculado = String(dvEsperado);
        if (dvEsperado === 11) dvCalculado = '0';
        else if (dvEsperado === 10) dvCalculado = 'k';
        return dvMinuscula === dvCalculado;
    }
});