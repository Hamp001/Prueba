function generarSelect() {
  var selectsDesplegados = document.getElementById("selectsDesplegados");
  var opcion = document.getElementById("opcionSelect");
  var nuevoSelect;

  if (selectsDesplegados.children.length < 1) {
    nuevoSelect = document.createElement("select");
    selectsDesplegados.appendChild(nuevoSelect);
    nuevoSelect.id = "selectGenerado";
    nuevoSelect.classList.add("form-select");
    console.log(nuevoSelect);
  } else {
    nuevoSelect = document.getElementById("selectGenerado");
    console.log("Ya existe un Select");
  }

  if (opcion.value != "") {
    var nuevaOpcion = document.createElement("option");
    nuevaOpcion.text = opcion.value;
    nuevaOpcion.value = opcion.value;
    nuevoSelect.appendChild(nuevaOpcion);
  }

  opcion.value = "";

  var formulario = document.getElementById("formularioSelect");
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
  });
}

function eliminarOpciones() {
  var selectGenerado = document.getElementById("selectGenerado");
  var opciones = selectGenerado.querySelectorAll("option");
  console.log(opciones);

  opciones.forEach(function(opcion, indice) {
    console.log("Contenido de la opción " + (indice + 1) + ": " + opcion.textContent);
  });
}


