var camposVisible = false;

function toggleCampos() {
  var mostrar = document.getElementById("mostrar");
  var contenidoMostrable = document.getElementById("contenidoMostrable");

  if (mostrar.style.display === "none") {
    mostrar.style.display = "block";
    contenidoMostrable.style.maxHeight = contenidoMostrable.scrollHeight + "px";
  } else {
    mostrar.style.display = "none";
    contenidoMostrable.style.maxHeight = "0";
  }
}

function operaciones() {
  var campo1 = document.getElementById("campoNum1").value;
  var campo2 = document.getElementById("campoNum2").value;

  if (campo1 === "" || campo2 === "") {
    alert("Debes completar ambos campos.");
    return;
  }

  if (!isNaN(campo1) && !isNaN(campo2)) {
    var numero1 = parseFloat(campo1);
    var numero2 = parseFloat(campo2);

    var suma = numero1 + numero2;
    var resta = numero1 - numero2;
    var division = numero1 / numero2;
    var division = division.toFixed(2);

    document.getElementById("resultado").innerHTML =
      "<b>Suma:</b> " +
      suma +
      ", <b>Resta:</b> " +
      resta +
      ", <b>División:</b> " +
      division;
  } else {
    alert("Ambos campos deben contener números.");
  }
}
