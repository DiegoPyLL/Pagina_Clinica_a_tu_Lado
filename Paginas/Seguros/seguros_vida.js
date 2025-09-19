document.addEventListener('DOMContentLoaded', function () {
    
    // Seleccionar el formulario por su ID
    const form = document.getElementById('seguro-form');

    // Escuchar el evento 'submit' del formulario
    form.addEventListener('submit', function (event) {
        
        // 1. Prevenir el envío real del formulario para manejarlo con JS
        event.preventDefault();

        // 2. Limpiar errores previos (opcional pero recomendado)
        limpiarErrores();
        
        // 3. Validar el formulario antes de guardar los datos
        if (!validarFormulario()) {
            console.log('El formulario contiene errores, no se guardarán los datos.');
            return; // Detiene la ejecución si hay errores
        }
        
        // 4. Guardar los datos del formulario en variables
        // Se crea un objeto 'datosContrato' para agrupar todo de forma ordenada
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
        
        // (Opcional) Mostrar los datos guardados en la consola para verificar
        console.log('Datos del contrato guardados:', datosContrato);
        
        // 5. Mostrar el mensaje de "Seguro Comprado"
        // Oculta el formulario y muestra un mensaje de éxito
        const formContainer = document.querySelector('.form-container');
        formContainer.innerHTML = `
            <div class="mensaje-exito">
                <strong>¡Felicidades, ${datosContrato.nombres}!</strong><br>
                Tu "${datosContrato.planNombre}" ha sido contratado con éxito.
                <p style="font-size: 1rem; margin-top: 15px;">Recibirás una copia de la póliza en tu correo: ${datosContrato.email}</p>
            </div>
        `;
    });
    
    // --- Funciones de Ayuda para la Validación ---
    
    function validarFormulario() {
        let esValido = true;
        
        // Validar campos uno por uno
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
        if (!/^[0-9]+-[0-9kK]{1}$/.test(rutCompleto)) return false;
        const [rut, dv] = rutCompleto.split('-');
        let M = 0, S = 1;
        for (; rut; S = (S + rut % 10 * (9 - M++ % 6)) % 11);
        return String(S ? S - 1 : 'k') === dv.toLowerCase();
    }
});