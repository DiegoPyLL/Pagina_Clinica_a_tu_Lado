// pagina por si necesitamos agregar codigo al perfil del paciente
document.getElementById('perfilPacienteForm').addEventListener('submit', function(event) {
    // Evita que el formulario se envíe de la forma tradicional
    event.preventDefault();

    // Aquí puedes agregar la lógica para guardar los cambios (por ejemplo, con fetch())
    console.log('Guardando cambios...');

    // Después de guardar, redirige a la nueva página
    window.location.href = "../PaginaPrincipal/p_principal.html";
});