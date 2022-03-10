import verificar_titulo from "./verificar_titulo";

const titulo = document.querySelector("#titulo");
const contenido = document.querySelector("#contenido");
const form = document.querySelector("#twitter-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const tittle = verificar_titulo(titulo.value);
  const content = contenido.value;

  div.innerHTML = "<p>" + tittle +"</br>"+ content + "</p>";
});
