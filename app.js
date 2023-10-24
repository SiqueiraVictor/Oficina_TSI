document.addEventListener("DOMContentLoaded", function () {
  var titulo = document.getElementById("titulo");
  var texto = document.getElementById("texto");

  function mudarh1() {
      if (titulo.style.color === "white") {
          titulo.style.color = "red";
      } else {
          titulo.style.color = "white";
      }
  }

  function mudarp (){
    if (texto.style.color === "white" ) {
        texto.style.color = "green";
    } else {
        texto.style.color = "white";
    }
  }
  titulo.addEventListener("click", mudarh1);
  texto.addEventListener("click",mudarp);
});