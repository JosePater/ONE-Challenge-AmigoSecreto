let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
  let elementoCampo = document.getElementById("amigo");
  let campoAmigo = elementoCampo.value;

  // Validar la entreda de amigos
  if (isNaN(campoAmigo)) {
    amigos.push(campoAmigo); // Agregar amigo al array
    actualizarListaAmigos(); // Actualizar DOM
    elementoCampo.value = ""; // Limpiar campo
  } else {
    alert("Campo vacío");
  }
}

// Actualizar lista de amigos en el DOM
function actualizarListaAmigos() {
  const elementoListaAmigos = document.getElementById("listaAmigos");

  elementoListaAmigos.innerHTML = ""; // Limpiar el elemento de la lista de amigos

  // Agregar ítems
  amigos.forEach(function (amigo) {
    const li = document.createElement("li"); // Crear un nuevo ítem
    li.textContent = amigo; // Asignar el nombre en el ítem
    elementoListaAmigos.appendChild(li); // Agregar el <li> al <ul>
  });
}
