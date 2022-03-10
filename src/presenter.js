import sumar from "./sumador";

const titulo = document.querySelector("#titulo");
const contenido = document.querySelector("#contenido");
const form = document.querySelector("#twitter-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const tittle = titulo.value;
  const content = contenido.value;

  div.innerHTML = "<p>" + tittle +"</br>"+ content + "</p>";
});
