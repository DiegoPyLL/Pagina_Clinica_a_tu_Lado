// Lista de doctores por área
const doctores = {
  general: [
    "Dra. Ana Pérez - Traumatóloga (2012)",
    "Dra. Juana Pérez - Médico de familia (2010)",
    "Dra. Marcela Ruiz - Ginecóloga (2015)",
    "Dra. Alejandra Peña - Atención primaria (2011)",
    "Dr. Ignacio Fuentes - Traumatólogo (2013)"
  ],
  cardiologia: [
    "Dr. Juan Torres - Cardiólogo (2012)",
    "Dra. Marcela Ruiz - Cardióloga (2015)",
    "Dra. Ricarda Gómez - Cardióloga (2016)",
    "Dra. Valentina Castro - Cardióloga (2013)"
  ],
  dermatologia: [
    "Dra. Ana Pérez - Dermatóloga (2011)",
    "Dr. Nicolás Díaz - Dermatólogo (2012)",
    "Dra. Isabel Soto - Dermatóloga (2014)",
    "Dr. Paulo Bravo - Dermatólogo (2013)",
    "Dra. Lorena Salazar - Dermatóloga (2015)"
  ],
  pediatria: [
    "Dr. Gabriel Molina - Pediatra (2010)",
    "Dra. Fernanda Morales - Pediatra (2011)",
    "Dra. Natalia Carrasco - Pediatra (2012)"
  ],
  psicologia: [
    "Dr. Sebastián Flores - Psicólogo (2013)",
    "Dra. Catalina Reyes - Psicóloga (2014)",
    "Dr. Esteban Rivas - Psicólogo (2015)",
    "Dr. Marcelo Duarte - Psicólogo (2012)"
  ],
  nutricion: [
    "Dra. Verónica Contreras - Nutrióloga (2011)",
    "Dr. Felipe Lagos - Nutriólogo (2012)"
  ]
};

// Detectar cambios en el área seleccionada
document.getElementById("area").addEventListener("change", function() {
  const area = this.value;
  const selectDoctor = document.getElementById("doctor");

  // Resetear opciones
  selectDoctor.innerHTML = "<option disabled selected>Seleccione un doctor</option>";

  // Insertar doctores
  if (doctores[area]) {
    doctores[area].forEach(doc => {
      const option = document.createElement("option");
      option.textContent = doc;
      selectDoctor.appendChild(option);
    });
  }
});

// Enviar formulario
document.getElementById("form-reserva").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Tu hora médica ha sido reservada con éxito.");
});
