var contador = 0;
function incrementarContador() {
  contador++;

  // Crear un nuevo botón con el valor del contador como su etiqueta
  var nuevoBoton = document.createElement("button");
  nuevoBoton.textContent = contador;

  nuevoBoton.classList.add("btn", "btn-success", "botonAnadido");
  nuevoBoton.id = "botonAnadido";

  // Agregar el nuevo botón como un hijo del elemento mostrarNum
  document.getElementById("mostrarNum").appendChild(nuevoBoton);

  var cantidadElementos =
    document.getElementsByClassName("botonAnadido").length;

  if (cantidadElementos > 0 && cantidadElementos % 10 === 0) {
    // Si la cantidad de elementos actual es un múltiplo de 10, agregar un salto de línea
    document
      .getElementById("mostrarNum")
      .appendChild(document.createElement("br"));
  }

  // Obtén el contenedorAnadidos
  var contenedorAnadidos = document.getElementById("contenedorAnadidos");
  // Verifica si mostrarNum tiene contenido
  if (document.getElementById("mostrarNum").innerHTML.trim() !== "") {
    // Si hay contenido, aplica el borde
    contenedorAnadidos.style.margin = "5px";
    contenedorAnadidos.style.border = "2px solid green";
    contenedorAnadidos.style.borderRadius = "15px";
  } else {
    // Si no hay contenido, elimina el borde
    contenedorAnadidos.style.border = "none ";
  }
}
function resetear() {
  var mostrarNum = document.getElementById("mostrarNum");
  mostrarNum.innerHTML = "";
  contador = 0;
  if (!mostrarNum.innerHTML.trim() !== "") {
    contenedorAnadidos.style.border = "none";
  }
}
