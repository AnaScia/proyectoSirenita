// let sirenita = document.createElement("h2");
// sirenita.innerHTML = "<h2>Personajes de 'Sirenita 2'</h2>";
// document.body.append(sirenita);

//Al hacer click en el titulo personaje me muestra un mensaje
const titulo = document.querySelector(".article__h2");
function saludarGenerico() {
  alert("Estos son los personajes");
}
titulo.addEventListener("click", saludarGenerico);

// //al pasar el mouse sobre cada personaje cambia el fondo
// // const caja = document.getElementsByClassName("personajes");
// // for (let i = 0; i < createPersonajes.length; i++) {
// //   caja[i].onmouseover = () => {
// //     caja[i].style.backgroundImage = 'url("./img/fondo.jpg")';
// //   };
// //   caja[i].onmouseout = () => {
// //     caja[i].style.backgroundImage = "";
// //   };
// // }

//funcion con desestructuracion
function personajesSirenita({
  nombreID,
  url = "./img/melody.jpeg",
  nombre,
  sexo,
  actor,
  especie,
}) {
  let article = document.querySelector(".article__section");

  let createDiv = document.createElement("div"); //creamos el nodo hijo nuevo
  article.appendChild(createDiv); //agregamos el nodo hijo nuevo al nodo padre
  createDiv.setAttribute("id", nombreID);
  createDiv.setAttribute("class", "personajes");

  let img = document.createElement("img");
  createDiv.appendChild(img);
  img.src = url;

  let createH3 = document.createElement("h3");
  createDiv.appendChild(createH3);
  createH3.append(nombre);

  let p1 = document.createElement("p");
  createDiv.appendChild(p1);
  p1.append("sexo:" + sexo);

  let p3 = document.createElement("p");
  createDiv.appendChild(p3);
  p3.append("actor:" + actor);

  let p4 = document.createElement("p");
  createDiv.appendChild(p4);
  p4.append("especie:" + especie);

  let botonBorrar = document.createElement("button");
  createDiv.append(botonBorrar);
  let dentroBotonBorrar = document.createTextNode("Eliminar personaje");
  botonBorrar.appendChild(dentroBotonBorrar);
  botonBorrar.setAttribute("style", "font-family: cursive");
  botonBorrar.addEventListener("click", (e) => {
    e.preventDefault();
    article.removeChild(createDiv);
  });
}

//Creamos la clase
class Personajes {
  constructor(nombreID, url, nombre, sexo, actor, especie) {
    this.nombreID = nombreID;
    this.url = url;
    this.nombre = nombre;
    this.sexo = sexo;
    this.actor = actor;
    this.especie = especie;
  }
}

let pers1 = new Personajes(
  "pj1",
  "./img/melody.jpeg",
  "Melody",
  "Femenino",
  "Tara Strong",
  "Humana"
);
let pers2 = new Personajes(
  "pj2",
  "./img/ariel.jpg",
  "Ariel",
  "Femenino",
  "Jodi Benson",
  "Sirena"
);
let pers3 = new Personajes(
  "pj3",
  "./img/morgana.jpg",
  "Morgana",
  "Femenino",
  "Pat Carrol",
  "Pulpo"
);
let pers4 = new Personajes(
  "pj4",
  "./img/sebastian.jpg",
  "Sebastian",
  "Masculino",
  "Samuel Wright",
  "cangrejo"
);

personajesSirenita(pers1);
personajesSirenita(pers2);
personajesSirenita(pers3);
personajesSirenita(pers4);

//CREACION DE PERSONAJES NUEVOS

//Creamos un div que contenga los datos del nuevo personaje
let personajeNuevo = document.querySelector("article");
const formulario = document.createElement("div");
personajeNuevo.appendChild(formulario);
formulario.className = "formulario";

//le agrego inputs con sus atributos al div

function inputs(type, name, value, placeholder) {
  let input = document.createElement("input");
  input.type = type;
  input.name = name;
  input.value = value;
  input.placeholder = placeholder;
  formulario.appendChild(input);
  return input;
}
let input0 = inputs("text", "id", "", "id");
let input1 = inputs("text", "nombre", "", "nombre");
let input2 = inputs("text", "sexo", "", "sexo");
let input3 = inputs("text", "actor", "", "actor");
let input4 = inputs("text", "especie", "", "especie");

//agrego boton al form para crear personaje nuevo
let boton = document.createElement("button");
let dentroBoton = document.createTextNode("Agregar personaje");
boton.appendChild(dentroBoton);
formulario.appendChild(boton);
boton.className = "boton__agregar";

//creamos un div y agregamos el personaje nuevo al article
function validacionDelForm() {
  let inputs = new Personajes(
    input0.value,
    "./img/personaje.png",
    input1.value,
    input2.value,
    input3.value,
    input4.value
  );
  personajesSirenita(inputs);
}

//Al hacer click en el boton me agrega el personaje nuevo
let agregarPersonaje = boton.addEventListener("click", (e) => {
  e.preventDefault();
  validacionDelForm();
});
