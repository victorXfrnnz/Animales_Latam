//llamado de los animaales
import { Leon, Lobo, Aguila, Oso, Serpiente } from "./animal.js"
//llamado formulario
(async function () {
  const animalElement = document.getElementById("animal");
  const edadElement = document.getElementById("edad");
  const comentariosElement = document.getElementById("comentarios");
  const previewElement = document.getElementById("preview");
  const btnRegistrarElement = document.getElementById("btnRegistrar");
  const playerElement = document.getElementById("player");

  const TarjetitasDeAnimales = [];

  let Animales;
  //Obtencion del JSON mediante async/await 
  const Request = await fetch("/animales.json");
  const ParsedRequest = await Request.json();
  Animales = ParsedRequest.animales;

  //Creacion de la card y foto en el html para luego ser mostrada en el modal
  function actualizarVista() {
    const zonaDeTarjetasElement = document.querySelector(".zona-de-tarjetas");
    zonaDeTarjetasElement.innerHTML = "";
    TarjetitasDeAnimales.forEach((animal) => {
      const DIVCard = document.createElement("div");
      const DIVFoto = document.createElement("div");
      const DIVBoton = document.createElement("div");
      DIVCard.classList.add("card", "text-white", "bg-secondary");
      DIVCard.style.width = "200px";
      DIVFoto.innerHTML = `<img class="card-img-top" src="./assets/imgs/${animal.Img}" />`;
      DIVBoton.classList.add("card-body", "p-0");
      DIVBoton.innerHTML = `
        <a href="#" class="btn btn-primary">
          <img class="p-1" src="./assets/imgs/audio.svg" style="width: 50px" />
        </a>`;
     
      // Implementacion de Jquery para cerrar modal mediante la clase indicada
      $(".modal-body").append()
     
      //Se Muestra la Foto, Edad y Comentarios en el Modal
      DIVFoto.addEventListener("click", () => {
        $("#modal").modal("show");
        console.log(animal);
        const modalBody = document.getElementById("modal-body");
        modalBody.innerHTML = `
          <p class="text-center">${animal.Nombre}
          <img src="./assets/imgs/${animal.Img}" style="width: 500px" class="img-fluid"/>
          <hr>
          <p class="text-center">Edad</p>
          <p class="text-center">${animal.Edad}</p>
          <hr>
          <p class="text-center">Comentarios</p>
          <p class="text-center">${animal.Comentarios}</p>
        `;
      });

      DIVBoton.addEventListener("click", () => {
        if (animal.Nombre === "Leon") {
          animal.Rugir(playerElement);
        } else if (animal.Nombre === "Lobo") {
          animal.Aullar(playerElement);
        }
      });

      DIVCard.appendChild(DIVFoto);
      DIVCard.appendChild(DIVBoton);

      zonaDeTarjetasElement.appendChild(DIVCard);
    });
  }
  //Selector de animales,  aca se realiza el preview
  animalElement.addEventListener("change", (event) => {
    const nombreDelAnimalElegido = animalElement.value;
    const animalEncontrado = Animales.find(
      (animal) => animal.name === nombreDelAnimalElegido
    );

    previewElement.setAttribute(
      "src",
      `./assets/imgs/${animalEncontrado.imagen}`
    );
  });
  //llama con click
  btnRegistrarElement.addEventListener("click", () => {
    let nombre = animalElement.value;
    let edad = edadElement.value;
    let comentarios = comentariosElement.value;
//aca llama al sonido
    const { imagen, sonido } = Animales.find(
      (animal) => animal.name === nombre
    );

    switch (nombre) {
      case "Leon":
        {
          const ElLeon = new Leon(nombre, edad, imagen, comentarios, sonido);
          TarjetitasDeAnimales.push(ElLeon);
        }
        break;

      case "Lobo":
        {
          const El_Lobo = new Lobo(nombre, edad, imagen, comentarios, sonido);
          TarjetitasDeAnimales.push(El_Lobo);
        }
        break;

      case "Oso":
        {
          const ElOso = new Oso(nombre, edad, imagen, comentarios, sonido);
          TarjetitasDeAnimales.push(ElOso);
        }
        break;

      case "Aguila":
        {
          const ElAguila = new Aguila(
            nombre,
            edad,
            imagen,
            comentarios,
            sonido
          );
          TarjetitasDeAnimales.push(ElAguila);
        }
        break;

      case "Serpiente":
        {
          const LaSerpiente = new Serpiente(
            nombre,
            edad,
            imagen,
            comentarios,
            sonido
          );
          TarjetitasDeAnimales.push(LaSerpiente);
        }
        break;
    }

    console.log(TarjetitasDeAnimales);

    actualizarVista();
  });
})();
