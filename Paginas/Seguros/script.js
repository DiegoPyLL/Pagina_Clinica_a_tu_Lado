
//es la misma lógica para la venta de seguros
//modificar y adaptar al contexto













// Función para enviar los datos al resultado
function enviar() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const producto = document.getElementById("producto").value;
  const cantidad = document.getElementById("cantidad").value;

  if (!producto) {
    alert("Debes seleccionar un producto.");
    return;
  }

  // Construir URL con parámetros simples
  const url = `resultado.html?nombre=${encodeURIComponent(nombre)}&apellido=${encodeURIComponent(apellido)}&producto=${encodeURIComponent(producto)}&cantidad=${encodeURIComponent(cantidad)}`;
  window.location.href = url;
}

// Función que se ejecuta en resultado.html para mostrar los datos
function mostrarDatos() {
  //Obtiene los parámetros de la URL (window.location.search)
  const params = new URLSearchParams(window.location.search);

  // Verificamos que existan los elementos
  const lblNombre = document.getElementById("lblNombre");
  const lblApellido = document.getElementById("lblApellido");
  const lblProducto = document.getElementById("lblProducto");
  const lblCantidad = document.getElementById("lblCantidad");
  const imgProducto = document.getElementById("imgProducto");

  // Si alguno de esos elementos no existe en el HTML, la función termina (evita errores).
  if (!lblNombre || !lblApellido || !lblProducto || !lblCantidad || !imgProducto) return;

  // Asignamos valores a los labels
  lblNombre.textContent = params.get("nombre") || "";
  lblApellido.textContent = params.get("apellido") || "";
  const producto = params.get("producto") || "";
  lblProducto.textContent = producto;
  lblCantidad.textContent = params.get("cantidad") || "";

  // Asignar imagen según producto desde carpeta local 'img/'
  if (producto === "zapatilla") {
    imgProducto.src = "img/zapatilla.png";
  } else if (producto === "camiseta") {
    imgProducto.src = "img/camiseta.jpg";
  } else if (producto === "pelota") {
    imgProducto.src = "img/pelota.jpg";
  } else {
    imgProducto.src = "img/default.jpg"; // opcional si no se selecciona producto
  }
}

// Ejecutar al cargar la página en resultado.html
window.onload = mostrarDatos;