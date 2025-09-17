// --- ESTRUCTURA DE DATOS ---

// Lista de doctores por área
const doctores = {
    general: [
        { nombre: "Dra. Ana Pérez", especialidad: "Traumatóloga", ano: 2012 },
        { nombre: "Dra. Juana Pérez", especialidad: "Médico de familia", ano: 2010 },
        { nombre: "Dra. Marcela Ruiz", especialidad: "Ginecóloga", ano: 2015 },
        { nombre: "Dra. Alejandra Peña", especialidad: "Atención primaria", ano: 2011 },
        { nombre: "Dr. Ignacio Fuentes", especialidad: "Traumatólogo", ano: 2013 }
    ],
    cardiologia: [
        { nombre: "Dr. Juan Torres", especialidad: "Cardiólogo", ano: 2012 },
        { nombre: "Dra. Marcela Ruiz", especialidad: "Cardióloga", ano: 2015 },
        { nombre: "Dra. Ricarda Gómez", especialidad: "Cardióloga", ano: 2016 },
        { nombre: "Dra. Valentina Castro", especialidad: "Cardióloga", ano: 2013 }
    ],
    dermatologia: [
        { nombre: "Dra. Ana Pérez", especialidad: "Dermatóloga", ano: 2011 },
        { nombre: "Dr. Nicolás Díaz", especialidad: "Dermatólogo", ano: 2012 },
        { nombre: "Dra. Isabel Soto", especialidad: "Dermatóloga", ano: 2014 },
        { nombre: "Dr. Paulo Bravo", especialidad: "Dermatólogo", ano: 2013 },
        { nombre: "Dra. Lorena Salazar", especialidad: "Dermatóloga", ano: 2015 }
    ],
    pediatria: [
        { nombre: "Dr. Gabriel Molina", especialidad: "Pediatra", ano: 2010 },
        { nombre: "Dra. Fernanda Morales", especialidad: "Pediatra", ano: 2011 },
        { nombre: "Dra. Natalia Carrasco", especialidad: "Pediatra", ano: 2012 }
    ],
    psicologia: [
        { nombre: "Dr. Sebastián Flores", especialidad: "Psicólogo", ano: 2013 },
        { nombre: "Dra. Catalina Reyes", especialidad: "Psicóloga", ano: 2014 },
        { nombre: "Dr. Esteban Rivas", especialidad: "Psicólogo", ano: 2015 },
        { nombre: "Dr. Marcelo Duarte", especialidad: "Psicólogo", ano: 2012 }
    ],
    nutricion: [
        { nombre: "Dra. Verónica Contreras", especialidad: "Nutrióloga", ano: 2011 },
        { nombre: "Dr. Felipe Lagos", especialidad: "Nutriólogo", ano: 2012 }
    ]
};


// --- FUNCIONES ---

/**
 * Rellena la lista desplegable de doctores según el área.
 */
function actualizarDoctores(areaSeleccionada) {
    const selectDoctor = document.getElementById("doctor");
    selectDoctor.innerHTML = '<option value="" disabled selected>Seleccione un doctor</option>';

    const listaDoctores = doctores[areaSeleccionada];
    if (listaDoctores) {
        listaDoctores.forEach(doc => {
            const textoOpcion = `${doc.nombre} - ${doc.especialidad} (${doc.ano})`;
            const opcion = document.createElement("option");
            opcion.value = textoOpcion;
            opcion.textContent = textoOpcion;
            selectDoctor.appendChild(opcion);
        });
    }
}

/**
 * Rellena la lista desplegable de horas con formato AM/PM.
 */
function generarHorarios() {
    const selectHora = document.getElementById('hora');
    for (let h = 8; h <= 18; h++) {
        for (let m = 0; m < 60; m += 30) {
            if (h === 18 && m > 0) break;
            
            const ampm = h >= 12 ? 'pm' : 'am';
            let horaDisplay = h > 12 ? h - 12 : h;
            const minutoDisplay = String(m).padStart(2, '0');
            const textoOpcion = `${horaDisplay}:${minutoDisplay} ${ampm}`;
            const valorOpcion = `${String(h).padStart(2, '0')}:${minutoDisplay}`;
            
            const opcion = document.createElement('option');
            opcion.value = valorOpcion;
            opcion.textContent = textoOpcion;
            selectHora.appendChild(opcion);
        }
    }
}

// --- CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA ---

document.addEventListener('DOMContentLoaded', function() {
    
    // Genera la lista de horas
    generarHorarios();

    // Configura el listener para el cambio de área
    document.getElementById("area").addEventListener("change", function() {
        actualizarDoctores(this.value);
    });

    // Configura el listener para el envío del formulario
    document.getElementById("form-reserva").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("✅ Tu hora médica ha sido reservada con éxito.");
    });
});