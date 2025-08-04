function cambiar() {
  document.getElementById('titulo9').innerText = "Hola Mundo con Javascript";
}

function cambiarColor() {
  const titulo = document.getElementById('titulo10');
  titulo.style.color = "red";
  titulo.style.textAlign = "center";
}

function creaDiv() {
  const div = document.createElement('div');
  div.innerText = "Javascript permite crear páginas dinámicas.";
  div.style.backgroundColor = "red";
  div.style.color = "white";
  div.style.textAlign = "center";
  div.style.marginTop = "10px";
  div.style.padding = "10px";
  document.getElementById('contenedor11').appendChild(div);
}
