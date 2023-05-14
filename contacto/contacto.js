const imgsirenita = document.getElementById("imgSirenita");

let radios = document.querySelectorAll('input[type="radio"]');
console.log(radios);

//no se puede hacer algo generico para todos los radios:
//radios.onclick=saludarGenerico

//se hace
function cambiarImagen(elemento, source) {
  elemento.src = source;
}

//array de 4 objetos
const personajesSirenita = [
  {
    id: 1,
    nombre: "melody",
    imagen: "../img/melody.jpeg",
  },
  {
    id: 2,
    nombre: "ariel",
    imagen: "../img/ariel.jpg",
  },
  {
    id: 3,
    nombre: "morgana",
    imagen: "../img/morgana.jpg",
  },
  {
    id: 4,
    nombre: "sebastian",
    imagen: "../img/sebastian.jpg",
  },
];

// para cada elemento de radio hacer..
radios.forEach((item) => {
  item.addEventListener("click", () => {
    let personajeUsuario = item.value;
    let variante = personajesSirenita.find(
      (personaje) => personaje.nombre == personajeUsuario
    );
    cambiarImagen(imgsirenita, variante.imagen);
  });
});

//submit

let formulario = document.getElementById("div1");

function validacionDelForm() {
  // evita.preventDefault();
  console.log("Su formulario fue enviado");
}
formulario.addEventListener("submit", validacionDelForm);
