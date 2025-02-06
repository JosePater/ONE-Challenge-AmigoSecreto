let amigos = [];

// Función para agregar amigos
function agregarAmigo(event) {
  event.preventDefault(); // Evitar recargar la página
  let elementoCampo = document.getElementById("amigo");
  let campoAmigo = elementoCampo.value;

  // Validar la entreda de amigos
  if (isNaN(campoAmigo)) {
    // Validar nombre repetidos
    if (amigos.includes(campoAmigo)) {
      alert(`El nombre '${campoAmigo}' ya existe!`);
    } else {
      amigos.push(campoAmigo); // Agregar amigo al array
      actualizarListaAmigos(); // Actualizar DOM
      elementoCampo.value = ""; // Limpiar campo
    }
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

// Sortear amigo
function sortearAmigo() {
  const cantAmigos = amigos.length; // Cantidad de amigos

  // Validar cantidad de amigos suficiente para sorteo
  if (cantAmigos < 2) {
    alert("Cantidad de amigos insuficiente para el sorteo");
  } else {
    const indexAmigo = Math.floor(Math.random() * cantAmigos); // Índice del amigo sorteado
    const amigoSorteado = amigos[indexAmigo]; // Amigo sorteado

    const elementoAmigoSorteado = document.getElementById("resultado"); // Elemento del amigo sorteado
    const li = document.createElement("li"); // Crear un nuevo ítem

    // Borrar todos los hijos del elemento
    while (elementoAmigoSorteado.firstChild) {
      elementoAmigoSorteado.removeChild(elementoAmigoSorteado.firstChild); // Borrar todos los hijos del elemento
    }
    li.textContent = amigoSorteado; // Asignar el nombre en el ítem
    elementoAmigoSorteado.appendChild(li); // Agregar el <li> (amigo soretado) al <ul>
  }
}
